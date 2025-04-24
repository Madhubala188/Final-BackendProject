// File: controllers/trainController.js
export const addTrain = async (req, res) => {
    try {
        // Logic to add a train
        res.status(201).json({ message: 'Train added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding train', error: err.message });
    }
};

export const getAllTrains = async (req, res) => {
    try {
        // Logic to get all trains
        res.status(200).json({ message: 'All trains fetched successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching trains', error: err.message });
    }
};

export const getTrainById = async (req, res) => {
    try {
        // Logic to get a train by ID
        res.status(200).json({ message: `Train with ID ${req.params.id} fetched successfully` });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching train', error: err.message });
    }
};