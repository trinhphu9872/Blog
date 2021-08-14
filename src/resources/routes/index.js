const newsRoute = require('./news');
const homeRoute = require('./site');
const courseRoute = require('./course');
const meRoute = require('./me');
// setting route
function route(app) {
    app.use('/course', courseRoute);
    app.use('/me', meRoute);
    app.use('/news', newsRoute);
    app.use('/', homeRoute);
}

module.exports = route;
