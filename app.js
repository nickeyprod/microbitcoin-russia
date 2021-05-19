const express = require('express');
const session = require('express-session');
const favicon = require('serve-favicon');
const path = require('path');
// const MongoStore = require('connect-mongo');
// const mongoose = require('mongoose');

const MONGODB_URI = process.env.NMONGODB_URI ? process.env.MONGODB_URI : "mongodb://localhost:27017/mbcdb";
const PORT = process.env.PORT ? process.env.PORT : 2000;

const app = express();


// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
//     useUnifiedTopology: true
// });

// add an error handler
// mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

// use sessions for tracking logins
app.use(session({
    secret: process.env.SEC_COOKIE ? process.env.SEC_COOKIE : "My secret cookie message",
    resave: true,
    saveUninitialized: false,
    cookie: {
        secure: "auto",
        maxAge: 1000 * 60 * 60 * 24 * 28
    },
    // store: new MongoStore({
    //     mongooseConnection: mongoose.connection,
    //     ttl: 24 * 60 * 60, // = 24 hours, after that time - delete
    // })
}));

// set locals
app.use(function(req, res, next) {
    res.locals.userId = req.session.userId;
    next();
});

// parse incoming requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(favicon(path.join(__dirname, '/public', 'favicon.ico')))

// serving static files in /static url
app.use('/static', express.static('public'));

// setting template engine
app.set("view engine", "pug");

// require all routes files
const mainRoutes = require('./routes/main_routes');
const introductionRoutes = require("./routes/introduction_routes");
const developmentRoutes = require("./routes/development_routes");
const infoRoutes = require("./routes/info_routes");

// make app use them
app.use(mainRoutes);
app.use("/introduction", introductionRoutes);
app.use("/development", developmentRoutes);
app.use("/info", infoRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('На сайте нет такой страницы: ' + decodeURI(req.originalUrl));
    res.status(404);
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.render('error', {
        errorStatus: res.statusCode,
        errorMessage: err.message,
        title: "Error " + res.statusCode
    });
});

// app will be listening on this port
app.listen(PORT, () => {
    console.log("microbitcoin running on localhost:" + PORT);
});