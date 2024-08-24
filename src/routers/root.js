import { Router } from 'express';

const router = Router()

router.get("/", function (req, res) {
    res.send('<a href="/auth/google">Login with Google</a>');
})

router.get("/views", function (req, res) {
    if (!req.session.views) {
        req.session.views = 0
    }
    req.session.views++
    res.send({
        cookie: `Number of views: ${req.session.views}`
    });
})

export default router