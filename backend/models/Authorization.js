// models/Authorization.js
const mongoose = require('mongoose');

const authorizationSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    treatment: String,
    insurancePlan: String,
    diagnosisCode: String,
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Authorization', authorizationSchema);
