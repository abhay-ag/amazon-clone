const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")('sk_test_51KlrHFSAgcLd4ctWAzi00jOQ4Ra9BrNl752b0V9MzoHwId3X6BoXTsbMBvKXhmFcosgtbDrABbNMvQJRa1THFAp100tu7Y4Ewo')

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    // OK - CREATED
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen Commands
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-99e4a/us-central1/api