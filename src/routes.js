const AuthController = require("./controllers/AuthController");
const AboutController = require("./controllers/AboutController");
const ContentController = require("./controllers/ContentController");

module.exports = (app) => {
    //register
    app.post('/api/register',
    AuthController.register)

    //login
    app.post('/api/login',
    AuthController.login)

    //logout
    app.get('/api/logout',
    AuthController.logout)

    //content
    app.get('/api/content',
    ContentController.index)

    //about
    app.get('/api/about',
    AboutController.index)
}