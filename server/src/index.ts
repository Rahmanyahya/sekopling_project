// import package
import Express from "express";

// Declaration
const app = Express()
const cors = require('cors')

// use despendecies
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(cors())






