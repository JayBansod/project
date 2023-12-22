const express = require("express");
const router = express.Router();
const bank_controller = require("../controller/bank_controller");
const authMiddleWare = require("../middleware/authMiddleWare");

router.route("/addAccount").post(bank_controller.addAccount);
router.route("/showAllBanks").get(authMiddleWare, bank_controller.showBanks);
router.route("/addTransaction").post(bank_controller.addTransaction);
router.route("/getAccountBalance").post(bank_controller.getAccountBalance);
router.route("/updateAccountBalance").post(bank_controller.updateAccountBalance);
router.route("/showAllTransction").get(authMiddleWare, bank_controller.showAllTransction);

module.exports = router;
