const router = require("express").Router();
const authController = require("../controllers/authController");
const postController = require("../controllers/postController");

router.get("/get-post-all", authController.protect, postController.getPostAll);
router.get("/get-post-feed", authController.protect, postController.getFeedPosts);
router.get("/get-post-id/:id", authController.protect, postController.getPostById);
router.get("/get-my-posts/:username", authController.protect, postController.getMyPosts);

router.post("/create-post", authController.protect, postController.createPost);

router.patch("/update-post", authController.protect, postController.updatePost);
router.patch("/like-post/:id", authController.protect, postController.likeUnlikePost);
router.patch("/reply-post/:id", authController.protect, postController.replyToPost);

router.delete("/delete-post/:id", authController.protect, postController.deletePost);


module.exports = router;