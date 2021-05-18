const express = require('express');
const router = express.Router();

// GET /
router.get("/", async(req, res, next) => {
    try {
        return res.render("main", { title: "Главная" });
    } catch (err) {
        return next(err);
    }
});


// GET /white-paper
router.get("/white-paper", async(req, res, next) => {
    try {
        return res.render("introduction/white-paper", { title: "Доклад (WhitePaper)" });
    } catch (err) {
        return next(err);
    }
});

// GET /
router.get("/account/login", async(req, res, next) => {
    try {
        return res.render("sign_acts/login", { title: "Войти" });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;