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
      // pull reCAPTCHA token from request body
      const recaptchaResponse = req.body.recaptcha;

      // reCAPTCHA Secret Key
      const secretKey = process.env.RECAPTCHA_SECRET_KEY;

      // reCaptcha Token gateway
      if (!recaptchaResponse) {
        return res.status(400).send("reCAPTCHA response missing");
      }

      // reCaptcha Secret Key gateway
      if (!secretKey) {
        return res.status(500).send("Server configuration error");
      }

      // Verify reCAPTCHA token
      const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${secretKey}&response=${recaptchaResponse}`,
      });

      // Parse response from reCAPTCHA
      const data = await response.json();

      // Return response from reCAPTCHA to client
      if (data) {
        res.send(data);
      }
    } catch (error) {
      // Handle error
      return res.status(500).send("Error verifying reCAPTCHA");
    }
  });
});
