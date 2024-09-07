const express = require("express")
const dotenv = require("dotenv")
const connectDB =  require('./config/db')
const  bodyParser = require('body-parser')
// import authRoutes from './routes/authRoutes'
const adminRoutes = require('./routes/adminRoutes')
// const categoryRoutes = require("./routes/categoryRoutes")
const cors = require("cors")


dotenv.config();

connectDB();

//rest object
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//middleware
app.use(cors());
app.use(express.json());


app.use("/api/v1/admin", adminRoutes)
// app.use("/api/v1/category", categoryRoutes)

//port
const PORT = 8000

//run listen
app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`)
})