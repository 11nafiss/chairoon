const mongoose = require("mongoose");
const { APPLIED_STATUS } = require("../utils/OptionConstant.js");

const ApplicationSchema = new mongoose.Schema(
  {
    applicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    appliedStatus: {
      type: String,
      enum: Object.values(APPLIED_STATUS),
      default: APPLIED_STATUS.PENDING,
    },
    recruitStatus: {
      type: String,
      trim: true,
    },
    applicantResume: {
      type: String,
    },
    dateOfApplication: {
      type: Date,
    },
    answerList: [
      {
        questionGiven: {
          type: String,
        },
        answerGiven: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const ApplyJob = mongoose.model("applyJob", ApplicationSchema);
module.exports = ApplyJob;
