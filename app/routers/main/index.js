const {Router} = require("express")
const homeRoute = Router();
const toolsRoute = Router();
const appsRoute = Router();
const blogRoute = Router();
const servicesRoute = Router();


homeRoute.get("/Home", (req, res) => {
    res.render("main/home",{layout:"mainLayout"});
})
toolsRoute.get("/Tools", (req, res) => {
    res.render("main/tools",{layout:"mainLayout"});
})
appsRoute.get("/Apps", (req, res) => {
    res.render("main/apps",{layout:"mainLayout"});
})
blogRoute.get("/Blog", (req, res) => {
    res.render("main/blog",{layout:"mainLayout"});
})
servicesRoute.get("/About", (req, res) => {
    res.render("main/about",{layout:"mainLayout"});
})


module.exports = app => {
    app.use(toolsRoute)
    app.use(appsRoute)
    app.use(homeRoute)
    app.use(servicesRoute)
    app.use(blogRoute)
}