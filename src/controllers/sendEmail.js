
const templates = require('../templates/mailTemplates')
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
    sendEmail(req, res) {
        console.log("test", process.env.SENDGRID_API_KEY);
        console.log("body", req.body);
        const {to, template, name} = req.body
        const msg = templates({to, template, name})


        sgMail
            .send(msg)
            .then((response) => {
                console.log(response[0].statusCode)
                console.log(response[0].headers)
            })
            .catch((error) => {
                console.error(error)
            })
            res.send("foi")
    }
}
