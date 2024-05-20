/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// eslint-disable-next-line object-curly-spacing
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const fetch = require("node-fetch");
require("dotenv").config();

admin.initializeApp();

exports.verifyRecaptcha = functions.https.onRequest((req, res) => {
  const recaptchaResponse = req.body.recaptcha;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // The secret key from reCAPTCHA

  fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Process form data or send email
        res.status(200).send("reCAPTCHA verified");
      } else {
        res.status(400).send("reCAPTCHA verification failed");
      }
    })
    .catch((error) => res.status(500).send("Error verifying reCAPTCHA"));
});
