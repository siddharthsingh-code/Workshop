const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const enquiryRoutes = require("./route");
const app = express();
require("dotenv").config();
connectDB();


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());


app.use("/api", enquiryRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
