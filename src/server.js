//const nodemon = require("nodemon");
const app = require("./app")

app.listen(process.env.PORT, () => {
    console.log(`PORT server ${process.env.PORT}`);
})
