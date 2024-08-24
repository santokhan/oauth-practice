import express, { Router } from 'express';
import path, { dirname } from 'path';

const router = Router()

router.use(express.static('public'))

router.get("/views", function (req, res) {
    if (!req.session.views) {
        req.session.views = 0
    }
    req.session.views++
    res.send({
        cookie: `Number of views: ${req.session.views}`
    });
})

router.get("/", function (req, res) {
    // Serve the HTML file from the public directory
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

export default router