const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { RECRUIT_ROLE, USER_RELIGION, USER_GENDER, JOB_TYPE, SCHOOL_TYPE } = require("../utils/OptionConstant.js");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    username: {
      type: String,
      unique: true,
      default: function () {
        return crypto.randomBytes(5).toString("hex");
      },
    },
    headline: {
      type: String,
      default: "Your headline?",
    },
    about: {
      type: String,
      default: "Your about?",
    },
    avatar: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: function (email) {
          return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        },
        message: (props) => `Email (${props.value}) is invalid!`,
      },
    },
    password: {
      // unselect
      type: String,
      required: [true, "Password is required"],
    },
    followers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    profileWeb: [
      {
        linkName: {
          type: String,
        },
        linkUrl: {
          type: String,
          default: "https://",
        },
      },
    ],
    gender: {
      type: String,
      enum: Object.values(USER_GENDER),
      default: USER_GENDER.MALE,
    },
    birthday: {
      type: Date,
      default: new Date(),
    },
    phoneNumber: {
      type: String,
      default: "Your phone number?",
    },
    city: {
      type: String,
      default: "Your city?",
    },
    country: {
      type: String,
      default: "Your country?",
    },
    religion: {
      type: String,
      enum: Object.values(USER_RELIGION),
      default: USER_RELIGION.SECRET,
    },
    passwordChangedAt: {
      // unselect
      type: Date,
    },
    passwordResetToken: {
      // unselect
      type: String,
    },
    passwordResetExpires: {
      // unselect
      type: Date,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    otp: {
      type: String,
    },
    otp_expiry_time: {
      type: Date,
    },
    friends: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    socket_id: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Online", "Offline"],
    },
    role: {
      type: String,
      enum: Object.values(RECRUIT_ROLE),
      default: RECRUIT_ROLE.USER,
    },
    skills: {
      type: [],
      trim: true,
    },
    experiences: [
      {
        companyName: {
          type: String,
        },
        positionTitle: {
          type: String,
        },
        employmentType: {
          type: String,
          enum: Object.values(JOB_TYPE),
        },
        location: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
        description: {
          type: String,
        },
      },
    ],
    educations: [
      {
        schoolName: {
          type: String,
        },
        degree: {
          type: String,
          enum: Object.values(SCHOOL_TYPE),
        },
        studyField: {
          type: String,
        },
        location: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
    organizations: [
      {
        organizationName: {
          type: String,
        },
        positionTitle: {
          type: String,
        },
        businessField: {
          type: String,
        },
        location: {
          type: String,
        },
        startDate: {
          type: String,
        },
        endDate: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
    achievements: [
      {
        achievementName: {
          type: String,
        },
        publishedBy: {
          type: String,
        },
        publishedDate: {
          type: String,
        },
        proofLink: {
          type: String,
        },
        description: {
          type: String,
        },
      },
    ],
    socialmedias: [
      {
        mediaName: {
          type: String,
        },
        mediaUsername: {
          type: String,
        },
        mediaLink: {
          type: String,
        },
      },
    ],
    isFrozen: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("otp") || !this.otp) return next();

  // Hash the otp with cost of 12
  this.otp = await bcrypt.hash(this.otp.toString(), 12);

  console.log(this.otp.toString(), "FROM PRE SAVE HOOK");

  next();
});

userSchema.pre("save", async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified("password") || !this.password) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  //! Shift it to next hook // this.passwordChangedAt = Date.now() - 1000;

  next();
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew || !this.password) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.correctOTP = async function (candidateOTP, userOTP) {
  return await bcrypt.compare(candidateOTP, userOTP);
};

userSchema.methods.changedPasswordAfter = function (JWTTimeStamp) {
  if (this.passwordChangedAt) {
    const changedTimeStamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return JWTTimeStamp < changedTimeStamp;
  }

  // FALSE MEANS NOT CHANGED
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
