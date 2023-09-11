const router = require("express").Router();

const dataRoutes = require("./dataRoutes");

router.use("/sample", dataRoutes);

module.exports = router;
