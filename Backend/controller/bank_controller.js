const express = require("express");
const bank_details = require("../modules/bank_detail");

const addAccount = async (req, res) => {
    let success = false;
    try {
        console.log(req.body);
        const { userId, bankName, amount } = req.body;
        const userBank = await bank_details.create({ userId, bankName, amount });
        success = true;
        res.status(200).json({ success, msg: "Account created", userBank });
    } catch (error) {
        console.log(error);
    }
};

const showBanks = async (req, res) => {
    try {
        // console.log("from bank  controller", req.body);
        const { userId } = req.body;
        const userBank = await bank_details.find({});
        console.log(userBank);
        res.status(200).send({ userBank });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { addAccount, showBanks };
