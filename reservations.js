const express = require("express");
const router = express.Router();
const Reservation = require("../models/Reservation");

router.post("/", async (req, res) => {
  try {
    const { providerName, category, city, price, date, time, details } = req.body;

    if (!providerName || !category || !city || !price || !date || !time) {
      return res.status(400).json({ message: "Champs manquants" });
    }

    const reservation = new Reservation({
      providerName,
      category,
      city,
      price,
      date,
      time,
      details
    });

    await reservation.save();

    res.status(201).json({
      message: "Réservation créée avec succès",
      reservation
    });
  } catch (error) {
    console.error("Reservation error:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;