// import package
import Express from "express";
import Login from "./auth/login.router"
import StudentRoute from "./router/student.router"
import dotenv from 'dotenv'
dotenv.config()

// Declaration
const app = Express()
const cors = require('cors')

// use despendecies
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors())

app.use('/auth-api', Login)
app.use('/student', StudentRoute)

app.listen(process.env.port, () => {console.log(`Listen on port ${process.env.port} | http://localhost:${process.env.port}`)})






