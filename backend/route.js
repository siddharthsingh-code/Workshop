const express = require("express");
const router = express.Router();

const User = require("./user");

// POST API
router.post("/enquiry", async (req, res) => {
  try {
    const { name, email, phone, workshop } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already registered",
      });
    }

    // Create user
    const user = await User.create({
      name,
      email,
      phone,
      workshop,
    });
    res.status(201).json({
      success: true,
      message: "Registration successful",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = router;
