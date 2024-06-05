const ApplyJob = require("../models/ApplyJob");
const Job = require("../models/Job");
const catchAsync = require("../utils/CatchAsync");

exports.getAppliedAll = catchAsync(async (req, res, next) => {
  const all_applieds = await ApplyJob.find({});

  res.status(200).json({
    status: "success",
    data: all_applieds,
    message: "All applied found successfully!",
  });
});

exports.getRecruiterJobs = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const filter = { recruiterId: userId };
  const result = await ApplyJob.find(filter).populate("applicantId").populate("jobId");
  const totalJobs = await ApplyJob.countDocuments(filter);
  // response
  res.status(200).json({
    status: true,
    totalJobs,
    result,
  });
});

exports.getApplicantJobs = catchAsync(async (req, res, next) => {
  const { userId } = req.params;
  const filter = { applicantId: userId };
  const result = await ApplyJob.find(filter).populate("recruiterId").populate("jobId");
  const totalJobs = await ApplyJob.countDocuments(filter);
  // response
  res.status(200).json({
    status: true,
    totalJobs,
    result,
  });
});

exports.applyInJob = catchAsync(async (req, res, next) => {
  const data = req.body;
  const alreadyApplied = await ApplyJob.findOne({
    applicantId: req.body.applicantId,
    jobId: req.body.jobId,
  });

  if (alreadyApplied) {
    next(createError(500, "Already Applied"));
  } else {
    const job = await Job.findById(data.jobId);
    if (job) {
      const applied = new ApplyJob({
        ...data,
        recruitStatus: job.recruitFlow[0],
      });
      const result = await applied.save();
      res.status(201).json({
        status: true,
        result,
        message: "Applied Successfully",
      });
    }
  }
});

exports.updateApplied = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  const isAppliedExists = await ApplyJob.findOne({ _id: id });
  if (!isAppliedExists) {
    next(createError(500, "Applied data not found"));
  } else {
    const updatedJob = await ApplyJob.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json({
      status: true,
      message: "Job Updated",
      result: updatedJob,
    });
  }
});

exports.updateAppliedStatus = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  if (data?.recruiterId?.toString() === req?.user._id.toString()) {
    console.log("same");
    if (!mongoose.Types.ObjectId.isValid(id)) {
      next(createError(400, "Invalid Job ID format"));
    }

    const isJobExists = await ApplyJob.findOne({ _id: id });
    if (!isJobExists) {
      next(createError(500, "Job not found"));
    } else {
      const updatedJob = await ApplyJob.findByIdAndUpdate(
        id,
        { $set: data },
        {
          new: true,
        }
      );
      res.status(200).json({
        status: true,
        message: "Applied status Updated",
        result: updatedJob,
      });
    }
  } else {
    next(createError(400, "Unauthorized user to update job"));
  }
});
