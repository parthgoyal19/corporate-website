import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEnquiryNotification = async (enquiry) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: "New Enquiry - Mutual Growth Website",
    text: `
A new enquiry has been received through the Mutual Growth website.

Name: ${enquiry.name}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Interest: ${enquiry.interest}

Message:
${enquiry.message}
    `,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEnquiryNotification;