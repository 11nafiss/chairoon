const router = require("express").Router();
const authController = require("../controllers/authController");
const questController = require("../controllers/questController");

router.get("/get-job-all", authController.protect, questController.getJobAll);
router.get("/get-my-jobs/:id", authController.protect, questController.getMyJobs);
router.get("/get-job-id/:id", authController.protect, questController.getJobById);

router.post("/create-job", authController.protect, questController.createJob);

router.patch("/update-job/:id", authController.protect, questController.updateJob);

router.delete("/delete-job/:id", authController.protect, questController.deleteJob);


module.exports = router;
