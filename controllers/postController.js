const Post = require("../models/Post");
const User = require("../models/User");
const catchAsync = require("../utils/CatchAsync");

exports.getPostAll = catchAsync(async (req, res, next) => {
  const all_posts = await Post.find({});

  res.status(200).json({
    status: "success",
    data: all_posts,
    message: "All post found successfully!",
  });
});

exports.getPostById = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.status(200).json({
    status: "success",
    data: post,
    message: "All post found successfully!",
  });
});

exports.getFeedPosts = catchAsync(async (req, res, next) => {
  const userId = req.user._id;
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const following = user.following;

  const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({
    createdAt: -1,
  });

  res.status(200).json({
    status: "success",
    data: feedPosts,
    message: "All post feed found successfully!",
  });
});

exports.getMyPosts = catchAsync(async (req, res, next) => {
  const { username } = req.params;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const posts = await Post.find({ postedBy: user._id }).sort({ createdAt: -1 });

  res.status(200).json({
    status: "success",
    data: posts,
    message: "All post me found successfully!",
  });
});

exports.createPost = catchAsync(async (req, res, next) => {
  const { postedBy, contentTitle, content } = req.body;

  if (!postedBy || !content) {
    return res
      .status(400)
      .json({ error: "Postedby and text fields are required" });
  }

  const user = await User.findById(postedBy);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  if (user._id.toString() !== req.user._id.toString()) {
    return res.status(401).json({ error: "Unauthorized to create post" });
  }

  const maxLength = 500;
  if (text.length > maxLength) {
    return res
      .status(400)
      .json({ error: `Text must be less than ${maxLength} characters` });
  }

  const newPost = new Post({ postedBy, contentTitle, content });
  await newPost.save();

  res.status(200).json({
    status: "success",
    data: newPost,
    message: "Post Created successfully!",
  });
});

exports.updatePost = catchAsync(async (req, res, next) => {
  const updateData = req.body;
  const postDoc = await User.findByIdAndUpdate(req.user._id, updateData);

  res.status(200).json({
    status: "success",
    data: postDoc,
    message: "All post found successfully!",
  });
});

exports.deletePost = catchAsync(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  if (post.postedBy.toString() !== req.user._id.toString()) {
    return res.status(401).json({ error: "Unauthorized to delete post" });
  }

  await Post.findByIdAndDelete(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Post deleted successfully",
  });
});

exports.likeUnlikePost = catchAsync(async (req, res, next) => {
  const { id: postId } = req.params;
  const userId = req.user._id;

  const post = await Post.findById(postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  const userLikedPost = post.likes.includes(userId);

  if (userLikedPost) {
    // Unlike post
    await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
    res.status(200).json({ message: "Post unliked successfully" });
  } else {
    // Like post
    post.likes.push(userId);
    await post.save();
    res.status(200).json({ message: "Post liked successfully" });
  }
});

exports.replyToPost = catchAsync(async (req, res, next) => {
  const { text } = req.body;
  const postId = req.params.id;
  const userId = req.user._id;
  const userProfilePic = req.user.profilePic;
  const username = req.user.username;

  if (!text) {
    return res.status(400).json({ error: "Text field is required" });
  }

  const post = await Post.findById(postId);
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  const reply = { userId, text, userProfilePic, username };

  post.replies.push(reply);
  await post.save();

  res.status(200).json(reply);
});
