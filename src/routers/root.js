import { Router } from 'express';

const router = Router()

router.get("/", function (req, res) {
    // res.send({ message: "Welcome back, Santo" })
    res.setHeader('Content-Type', 'text/html')
    res.send('<a href="/auth/google">Login with Google</a>');
})

export default router