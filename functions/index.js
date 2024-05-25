/* eslint-disable no-undef */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
const cors = require("cors")({ origin: true });
require("dotenv").config();

admin.initializeApp();

exports.verifyRecaptcha = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const recaptchaResponse = req.body.recaptcha;
      const secretKey = process.env.RECAPTCHA_SECRET_KEY; // The secret key from reCAPTCHA

      if (!recaptchaResponse) {
        return res.status(400).send("reCAPTCHA response missing");
      }

      if (!secretKey) {
        console.error("reCAPTCHA secret key is missing");
        return res.status(500).send("Server configuration error");
      }

      const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${recaptchaResponse}`,
      });

      const data = await response.json(); // Directly parse response as JSON

      if (data) {
        res.send(data);
      }
    } catch (error) {
      console.error("Error verifying reCAPTCHA:", error);
      return res.status(500).send("Error verifying reCAPTCHA");
    }
  });
});
