const express = require('express');
const router = express.Router();

// GET /development
router.get("/", async(req, res, next) => {
    try {
        return res.render("development", { title: "Разработка" });
    } catch (err) {
        return next(err);
    }
});

// GET /development/protocol
router.get("/protocol", async(req, res, next) => {
    try {
        return res.render("development/protocol", { title: "MBC Протокол" });
    } catch (err) {
        return next(err);
    }
});

// GET /development/mining-mbc
router.get("/mining-mbc", async(req, res, next) => {
    try {
        return res.render("development/mining", { title: "Майнинг MBC" });
    } catch (err) {
        return next(err);
    }
});


module.exports = router;