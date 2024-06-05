const router = require("express").Router();

const userController = require("../controllers/userController");
const authController = require("../controllers/authController");


router.get("/get-call-logs", authController.protect, userController.getCallLogs);
router.get("/get-me", authController.protect, userController.getMe);
router.get("/get-all-verified-users", authController.protect, userController.getAllVerifiedUsers);
router.get("/get-users", authController.protect, userController.getUsers);
router.get("/get-requests", authController.protect, userController.getRequests);
router.get("/get-friends", authController.protect, userController.getFriends);
router.get("/get-profile/:query", userController.getUserProfile);
router.get("/get-user-all", authController.protect, userController.getUserAll);
router.get("/get-suggested", authController.protect, userController.getSuggestedUser);

router.post(
  "/generate-zego-token",
  authController.protect,
  userController.generateZegoToken
);
router.post("/start-audio-call", authController.protect, userController.startAudioCall);
router.post("/start-video-call", authController.protect, userController.startVideoCall);
router.post("/follow/:id", authController.protect, userController.followUnFollowUser);

router.patch("/update-me", authController.protect, userController.updateMe);

router.delete("/delete/:id", authController.protect, userController.deleteUser);


module.exports = router;
