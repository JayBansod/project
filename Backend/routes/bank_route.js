const express = require("express");
const router = express.Router();
const bank_controller = require("../controller/bank_controller");

router.route("/addAccount").post(bank_controller.addAccount);
router.route("/showAllBanks").get(bank_controller.showBanks);

module.exports = router;
