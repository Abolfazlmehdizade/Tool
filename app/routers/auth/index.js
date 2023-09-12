const {Router} = require("express")

const signUpRoute = Router();
const loginRoute = Router();


signUpRoute.get("/Login", (req, res) => {
    res.render("auth/login", {layout: false});
})
loginRoute.get("/SignUp", (req, res) => {
    res.render("auth/signUp", {layout: false});
})


module.exports = app => {
    app.use("/auth", signUpRoute)
    app.use("/auth", loginRoute)
}