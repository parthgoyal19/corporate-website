import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Mutual Growth API is running.",
  });
});

app.post("/api/enquiries", (req, res) => {
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

  console.log("New enquiry received:");
  console.log({
    name,
    email,
    phone,
    interest,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Enquiry received successfully.",
  });
});

app.listen(PORT, () => {
  console.log(`Mutual Growth API running on http://localhost:${PORT}`);
});