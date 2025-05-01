const express = require('express')
const connectDB = require('./config/db')
require('dotenv').config()

const port = 3001
connectDB();

const app = express()

app.use(express.json())

app.use('/user',require('./backend/routes/userRoutes'))

app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`)
})