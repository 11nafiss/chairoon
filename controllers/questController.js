const { mongoose } = require("mongoose");
const Job = require("../models/Job");
const ApplyJob = require("../models/ApplyJob");
const catchAsync = require("../utils/CatchAsync");
const createHttpError = require("http-errors");

exports.getJobAll = catchAsync(async (req, res, next) => {
  const all_jobs = await Job.find({}).populate("createdBy");

  res.status(200).json({
    status: "success",
    data: all_jobs,
    message: "All job found successfully!",
  });
});

exports.getMyJobs = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const filter = { createdBy: id };
  const result = await Job.find(filter).populate("createdBy");
  const totalJobs = await Job.countDocuments(filter);
  // response
  res.status(200).json({
    status: true,
    totalJobs,
    result,
  });
});

exports.getJobById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    next(createHttpError(400, "Invalid Job ID format"));
  }
  const result = await Job.findById(id);
  if (!result) {
    res.status(400).json({
      message: "Job not found",
    });
  } else {
    res.status(200).json({
      status: true,
      result,
    });
  }
});

exports.createJob = catchAsync(async (req, res, next) => {
  const jobData = req.body;
  const isJobExists = await Job.findOne({
    _id: jobData._id,
  });
  if (isJobExists) {
    res.status(400).json({
      message: "Job data already exist",
    });
  } else {
    console.log(req?.user);
    jobData.createdBy = req?.user?._id;
    const newJob = new Job(jobData);
    const result = await newJob.save();

    res.status(201).json({
      status: true,
      result,
    });
  }
});

exports.updateJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    next(createHttpError(400, "Invalid Job ID format"));
  }

  const isJobExists = await Job.findOne({ _id: id });
  if (!isJobExists) {
    next(createHttpError(500, "Job not found"));
  } else {
    const updatedJob = await Job.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({
      status: true,
      message: "Job Updated",
      result: updatedJob,
    });
  }
});

exports.deleteJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    next(createHttpError(400, "Invalid Job ID format"));
  }

  const isJobExists = await Job.findOne({ _id: id });
  if (!isJobExists) {
    res.status(500).json({
      status: false,
      message: "Job not found",
    });
  } else {
    await ApplyJob.deleteMany({ jobId: id });
    const result = await Job.findByIdAndDelete(id);

    res.status(200).json({
      status: true,
      message: "Job Deleted",
      result,
    });
  }
});
