const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post")


dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);



app.get("/", (req,res)=>{
    res.send("Welcome to Homepage")
})
app.get("/users", (req,res)=>{
    res.send("Welcome Users")
})




app.listen(5000, () => {
  console.log("Backend is running");
});
