const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const connectDB = require("./config/db"); 
const auths = require("./routes/auth")
const jobs = require("./routes/jobs")

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended:false}))

app.use("/auth" , auths );
app.use("/jobs" , jobs);


connectDB();

//   app.use("/auth", authRoute);
//   app.use("/event" , eventRoute);
  


app.get('/', (req, res) => {
    res.send("hello boizz");
})

const PORT = process.env.PORT || 5001;
console.log(`server is running at Port: ${PORT}`);

app.listen(PORT);