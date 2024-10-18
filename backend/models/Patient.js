// models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    condition: String,
    medicalHistory: [{ treatment: String, date: Date }],
    labResults: [{ test: String, result: String, date: Date }],
});

module.exports = mongoose.model('Patient', patientSchema);
