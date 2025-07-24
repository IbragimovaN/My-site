import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import express from "express";
import "dotenv/config";

const app = express();
const PORT = 3002;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
  res.status(200).json({ success: true });
  console.log(name, email);
  try {
    await transporter.sendMail({
      from: process.env.MAIL,
      to: process.env.MAIL,
      subject: `Новое сообщение от ${name}`,
      text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
      html: `
            <h3>Новое сообщение с сайта</h3>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Сообщение:</strong> ${message}</p>
          `,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, async () => {
  console.log(`server started on port ${PORT}`);
});
