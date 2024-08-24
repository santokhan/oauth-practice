import passport from "passport";
import passportGoogleOAuth20 from "passport-google-oauth20";
import UserModel from "./schemas/user.js";
import session from "express-session";

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
                callbackURL: process.env.CALLBACK_URL,
            },
            async (accessToken, refreshToken, profile, done) => {
                console.log({ accessToken, refreshToken })
                // Save the user profile to session or database
                try {
                    const user = await UserModel.findOne({ id: profile.id })

                    if (!user) {
                        const user = new UserModel(profile);
                        user.save().then(function () {
                            console.log("Saved user")
                        })
                    }

                    return done(null, profile);
                } catch (error) {
                    return done(error, null);
                }
            }
        )
    )

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser(async (obj, done) => {
        try {
            const user = await UserModel.findOne({ id: obj.id })
            done(null, user)
        } catch (error) {
            done(error, null);
        }
    });
}

export default configure;