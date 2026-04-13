const reservationRoutes = require("./routes/reservations");
const reviewRoutes = require("./routes/reviews");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const connectDB = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB for every cold start
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    return res.status(500).json({ message: "Database connection failed" });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

if (process.env.NODE_ENV !== "production") {
  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running locally");
  });
}

module.exports = app;