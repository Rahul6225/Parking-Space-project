import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DATABASE CONNECTED SUCCEFULLY.");
    app.listen(PORT, () => {
      console.log(`Server is Running Successfully on :${PORT}`);
    });
  })
  .catch((error) => console.log(error));
const userSchema = new mongoose.Schema({
  name: String,
  roll: Number,
  age: Number,
});
const UseModel = mongoose.model("users", userSchema);

app.get("/getUsers", async (req, res) => {
  const userData = await UseModel.find();
  res.json(userData); 
});
