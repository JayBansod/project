const express = require("express");
const router = express.Router();
const bank_controller = require("../controller/bank_controller");

router.route("/addAccount").post(bank_controller.addAccount);
router.route("/showAllBanks").get(bank_controller.showBanks);
router.route("/addTransaction").post(bank_controller.addTransaction);
router.route("/getAccountBalance").post(bank_controller.getAccountBalance);
router.route("/updateAccountBalance").post(bank_controller.updateAccountBalance);

module.exports = router;
