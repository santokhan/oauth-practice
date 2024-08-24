import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import https from 'https'
import fs from "fs"
import rootRouter from './src/routers/root.js'
import authRouter from './src/routers/auth/auth.js'
import session from "express-session"
import connectMongo from "./src/config/mongodb.js"

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.use(cors("*"))
app.use(session({
    name: 'connect.sid',          // Cookie name
    secret: process.env.MY_SECRET_KEY,    // Secret to sign the session ID cookie
    resave: false,                // Don't save session if unmodified
    saveUninitialized: false,     // Don't create session until something is stored
    cookie: {
        secure: false,              // Set to true if using HTTPS
        httpOnly: true,             // Prevent JavaScript access to the cookie
        maxAge: 1000 * 60 * 60 * 24  // Cookie expiration (e.g., 1 day)
    }
}));
app.use(rootRouter)
app.use(authRouter)

// HTTPS Server
const options = {
    // key: fs.readFileSync('./ssl/server.key'),
    // cert: fs.readFileSync('./ssl/server.cert'),
    cert: fs.readFileSync('./ssl/cert.pem'),
    key: fs.readFileSync('./ssl/key.pem'),
};

const httpsServer = https.createServer(options, app)

function listener() {
    console.log(`Server is running on https://localhost:${port}`)
}

connectMongo().then(function () {
    console.log(`MongoDB is connected.`)
    httpsServer.listen(port, listener)
}).catch(console.error)
