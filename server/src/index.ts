// import package
import Express from "express";
import Login from "./auth/login.router"
import dotenv from 'dotenv'
import loginRouter from './router/login.router'
import adminRouter from './router/admin.router'
import studentRouter from './router/student.router'
import transactionRouter from './router/transaction.router'

dotenv.config()

// Declaration
const app = Express()
const cors = require('cors')

// use despendecies
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors())

app.use('/auth-api', Login)
app.use('/auth', loginRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);
app.use('/transaction', transactionRouter);


app.listen(process.env.port, () => {console.log(`Listen on port ${process.env.port} | http://localhost:${process.env.port}`)})






