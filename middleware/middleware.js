
function authorised(req, res, next) {
    if (req.session.authorised) {
        return next();
    } else {
        res.status(401);
        return next(new Error("Войдите, чтобы видеть эту страницу"));
    }
}

function unauthorised(req, res, next) {
    if (req.session.authorised) {
        return res.redirect("/account/login");
    } else {
        return next();
    }
}

function setLocale(req, res, next) {
    req.i18n.changeLanguage(req.cookies.locale);
    return next();
}


module.exports.authorised = authorised;
module.exports.unauthorised = unauthorised;
module.exports.setLocale = setLocale;