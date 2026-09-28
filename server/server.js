import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import Enquiry from "./models/Enquiry.js";
import sendEnquiryNotification from "./services/emailService.js";

const app = express();

const PORT = 5000;
connectDB();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Mutual Growth API is running.",
  });
});

app.post("/api/enquiries", async (req, res) => {
  const {
    name,
    email,
    phone,
    interest,
    message,
  } = req.body;

  if (!name || !email || !phone || !interest || !message) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required enquiry details.",
    });
  }

  try {
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      interest,
      message,
    });

    console.log("New enquiry saved to MongoDB:");
    console.log(enquiry);

    await sendEnquiryNotification(enquiry);

    console.log("Enquiry notification email sent successfully.");

    res.status(201).json({
      success: true,
      message: "Enquiry received successfully.",
    });
  } catch (error) {
    console.error("Failed to save enquiry:", error.message);

    res.status(500).json({
      success: false,
      message: "Unable to save enquiry. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Mutual Growth API running on http://localhost:${PORT}`);
});