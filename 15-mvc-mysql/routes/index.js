const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);
router.get("/visitors", controller.get_visitors);

router.post("/visitor", controller.post_visitor);
module.exports = router;
