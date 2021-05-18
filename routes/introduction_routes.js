const express = require('express');
const router = express.Router();

// GET /introduction
router.get("/", async(req, res, next) => {
    try {
        return res.render("introduction", { title: "Представление" });
    } catch (err) {
        return next(err);
    }
});

// GET /introduction/what-is-mbc
router.get("/what-is-mbc", async(req, res, next) => {
    try {
        return res.render("introduction/what-is-mbc", { title: "Что такое MicroBitcoin?" });
    } catch (err) {
        return next(err);
    }
});

// GET /introduction/getting-started
router.get("/getting-started", async(req, res, next) => {
    try {
        return res.render("introduction/getting-started", { title: "С чего начать?" });
    } catch (err) {
        return next(err);
    }
});

// GET /introduction/wallet
router.get("/wallet", async(req, res, next) => {
    try {
        return res.render("introduction/wallet", { title: "Кошелёк" });
    } catch (err) {
        return next(err);
    }
});

// GET /introduction/buy-mbc
router.get("/buy-mbc", async(req, res, next) => {
    try {
        return res.render("introduction/buy-mbc", { title: "Купить MBC" });
    } catch (err) {
        return next(err);
    }
});


// GET /introduction/services
router.get("/services", async(req, res, next) => {
    try {
        return res.render("introduction/services", { title: "Сервисы" });
    } catch (err) {
        return next(err);
    }
});


module.exports = router;