const express = require('express');
const router = express.Router();

// GET /info
router.get("/", async(req, res, next) => {
    try {
        return res.render("info", { title: "Информация" });
    } catch (err) {
        return next(err);
    }
});

module.exports = router;