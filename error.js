var createError = require("http-errors");

module.exports = function(app) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
        var status = err.status || 500;
        return res.status(status).send({
            success: false,
            name: err.name || "Something went wrong",
            message: err.message
        });
    });
    return app;
};
