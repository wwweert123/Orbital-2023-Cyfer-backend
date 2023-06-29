const express = require("express");
const router = express.Router();
const walletsController = require("../../controllers/walletsController");

router
    .route("/")
    .get(walletsController.getAllWallet)
    .post(walletsController.addWalletAddress);

router
    .route("/contracts/:address")
    .get(walletsController.getContractsofaddress);

router.route("/addcontract").post(walletsController.addContracttoaddress);

router.route("/addeditor").post(walletsController.addEditor);

router
    .route("/getcontractaddress/:txid")
    .get(walletsController.getContractAddress);

router
    .route("/gettransactionhistory/:walletaddress")
    .get(walletsController.getTransactions);

module.exports = router;
