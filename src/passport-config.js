import session from "express-session";
import passport from "passport";
import passportGoogleOAuth20 from "passport-google-oauth20";

const GoogleStrategy = passportGoogleOAuth20.Strategy

function configure() {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: process.env.CALLBACK_URL
            },
            (accessToken, refreshToken, profile, done) => {
                // Save the user profile to session or database
                console.log({ accessToken, refreshToken })
                // session({
                //     name: "accessToken",
                // })

                return done(null, profile);
            }
        )
    )

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((obj, done) => {
        done(null, obj);
    });
}

export default configure;