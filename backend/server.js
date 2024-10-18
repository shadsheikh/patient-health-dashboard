// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Patient = require('./models/Patient');
const Authorization = require('./models/Authorization');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/patientDashboard', { useNewUrlParser: true, useUnifiedTopology: true });

// Get all patients
app.get('/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create an authorization request
app.post('/authorizations', async (req, res) => {
    const authorization = new Authorization({
        patientId: req.body.patientId,
        treatment: req.body.treatment,
        insurancePlan: req.body.insurancePlan,
        diagnosisCode: req.body.diagnosisCode,
    });

    try {
        const newAuthorization = await authorization.save();
        res.status(201).json(newAuthorization);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.listen(3000, () => console.log('Server started on port 3000'));
