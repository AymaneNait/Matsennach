const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    providerName: { type: String, required: true },
    category: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    details: { type: String, default: "" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reservation", reservationSchema);