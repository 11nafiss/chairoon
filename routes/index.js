const router = require("express").Router();

const authRoute = require("./auths");
const userRoute = require("./users");
const postRoute = require("./posts");
const questRoute = require("./quests");
const applyRoute = require("./applies");

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/post", postRoute);
router.use("/quest", questRoute);
router.use("/apply", applyRoute);

module.exports = router;