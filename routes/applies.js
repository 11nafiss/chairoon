const router = require("express").Router();
const authController = require("../controllers/authController");
const applyController = require("../controllers/applyController");

router.get("/get-applicant-jobs", authController.protect, applyController.getAppliedAll);
router.get("/get-recruiter-jobs/:userId", authController.protect, applyController.getRecruiterJobs);
router.get("/get-applicant-jobs/:userId", authController.protect, applyController.getApplicantJobs);

router.post("/new-job", authController.protect, applyController.applyInJob);

router.patch("/update-applied/:id", authController.protect, applyController.updateApplied);
router.patch("/applied-status/:id", authController.protect, applyController.updateAppliedStatus);


module.exports = router;