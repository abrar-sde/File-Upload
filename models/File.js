const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

fileSchema.post("save", async function (doc) {
  try {
    console.log("Doc ", doc);

    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `Abrar - Developer`,
      to: doc.email,
      subject: "New file uploaded on cloudinary",
      html: `<h2> Hey user </h2><p> File uploaded View here: <a href = "${doc.imageUrl}"> ${doc.imageUrl}</a></p>`,
    });

    console.log(info);
  } catch (error) {
    console.log(error);
  }
});

const File = mongoose.model("File", fileSchema);
module.exports = File;
