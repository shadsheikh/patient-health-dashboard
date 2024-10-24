import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import Patient from './models/Patient.js'
import Authorization from './models/Authorization.js'
import cors from 'cors'
import path from 'path'

dotenv.config()
const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cors({ origin: true }));

const PORT = process.env.PORT || 3000

// Get all patients
app.get('/patients/', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create an authorization request
app.post('/authorizations/', async (req, res) => {
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

if (process.env.NODE_ENV == "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}
app.enableCors({
    origin: '*',
});
app.listen(PORT, () => {
    connectDB();
    console.log('Server started on port' + PORT)
});
