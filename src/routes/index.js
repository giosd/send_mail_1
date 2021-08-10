
const express = require("express")
const router = express.Router();
const sendEmailController = require("../controllers/sendEmail")

router.get('/', (req, res) => {
    res.send("eae")
})

router.post("/sendEmail",
    sendEmailController.sendEmail)

module.exports = router