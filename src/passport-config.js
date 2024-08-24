import passport from "passport";
import passportGoogleOAuth20 from "passport-google-oauth20";

const GoogleStrategy = passportGoogleOAuth20.Strategy

/**
 * Function to initialize OAoth2.0 
 * 
 * It should be invoked on the application start
 */
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