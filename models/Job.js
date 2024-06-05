const mongoose = require("mongoose");
const {
  INPUT_TYPE,
  JOB_TYPE,
  PAY_PERIODS,
  WORK_PLACEMENT,
} = require("../utils/OptionConstant.js");

// const ApplicationModel = require("../Model/ApplicationModel");

const JobSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    companyLogo: {
      type: String,
    },
    companyName: {
      type: String,
      trim: true,
    },
    recruitFlow: {
      type: [],
      required: true,
      trim: true,
      // minLength: [5, "Company name is too short"],
      // maxLength: [100, "Company name is too long"],
    },
    jobPosition: {
      type: String,
      trim: true,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
    },
    workPlacement: {
      type: String,
      enum: Object.values(WORK_PLACEMENT),
      default: WORK_PLACEMENT.WFO,
    },
    jobSalary: {
      type: Number,
      trim: true,
      // minLength: [5, "Company name is too short"],
      // maxLength: [100, "Company name is too long"],
    },
    payPeriods: {
      type: String,
      enum: Object.values(PAY_PERIODS),
      default: PAY_PERIODS.ONCE,
    },
    jobStartDate: {
      type: Date,
    },
    jobEndDate: {
      type: Date,
    },
    jobDeadline: {
      type: Date,
    },
    jobSkills: {
      type: [],
      trim: true,
      // minLength: [5, "Company name is too short"],
      // maxLength: [100, "Company name is too long"],
    },
    jobFacilities: {
      type: [],
      trim: true,
      // minLength: [5, "Company name is too short"],
      // maxLength: [100, "Company name is too long"],
    },
    contactMail: {
      type: String,
      trim: true,
      // minLength: [5, "Company name is too short"],
      // maxLength: [100, "Company name is too long"],
    },
    linkWebsite: {
      type: String,
      trim: true,
      // minLength: [5, "Company name is too short"],
      // maxLength: [100, "Company name is too long"],
    },
    jobDescription: {
      type: String,
      trim: true,
      // minLength: [5, "Company name is too short"],
      // maxLength: [100, "Company name is too long"],
    },
    jobParticipant: {
      type: String,
      trim: true,
      // minLength: [5, "Company name is too short"],
      // maxLength: [100, "Company name is too long"],
    },
    questionList: [
      {
        questionGiven: {
          type: String,
        },
        answerType: {
          type: String,
          enum: Object.values(INPUT_TYPE),
          default: INPUT_TYPE.TEXT,
        },
      },
    ],
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // to keep track
);

const Job = mongoose.model("Job", JobSchema);
module.exports = Job;
