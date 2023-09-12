const express = require("express");

const app = express()

require("./boot")(app);
require("./routers/main")(app);
require("./routers/auth")(app);

app.get("/", (req, res) => {
    res.redirect("/Home")
})

module.exports.app = (port = 2000, cllBack = () => {
    console.log("listening on port 2000\nurl>> http://localhost:2000")
}) => {
    app.listen(port, cllBack)
}