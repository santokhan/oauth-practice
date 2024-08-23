import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import https from 'https'
import fs from "fs"
import rootRouter from './src/routers/root.js'
import authRouter from './src/routers/auth/auth.js'

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.use(cors("*"))
app.use(rootRouter)
app.use(authRouter)

// HTTPS Server
const options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
};

https.createServer(options, app).listen(port, function () {
    console.log(`Server is running on https://localhost:${port}`)
})