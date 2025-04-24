// File: routes/trainRoutes.js
import express from 'express';
import { addTrain, getAllTrains, getTrainById } from '../controllers/trainController.js';

const router = express.Router();

// Route to add a new train
router.post('/', addTrain);

// Route to get all trains
router.get('/', getAllTrains);

// Route to get train details by ID
router.get('/:id', getTrainById);

export default router;