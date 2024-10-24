import mongoose from "mongoose";

const authorizationSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    treatment: String,
    insurancePlan: String,
    diagnosisCode: String,
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now },
});

const Authorization = mongoose.model('Authorization', authorizationSchema);

export default Authorization;