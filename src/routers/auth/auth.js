import passport from "passport"
import dotenv from "dotenv"
import { Router } from 'express'
import passportConfig from '../../passport-config.js'

dotenv.config()

passportConfig()

const router = Router()

router.use(passport.initialize())
router.use(passport.session())

router.get("/auth/google", passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get(
    "/auth/google/callback",
    passport.authenticate('google', { failureRedirect: "/" }),
    (req, res) => {
        res.redirect("/profile")
    }
)

router.get('/profile', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.json(req.user);
});

export default router