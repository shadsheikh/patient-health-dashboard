import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    condition: String,
    medicalHistory: [{ treatment: String, date: Date }],
    labResults: [{ test: String, result: String, date: Date }],
});

const Patient = mongoose.model('Patient', patientSchema);

export default Patient;