const newsRoute = require('./news');
const homeRoute = require('./site')

// setting route
function route(app) {
    app.use('/news', newsRoute)
    app.use('/',homeRoute)
}

module.exports = route;