import Booking from '../models/booking.js'; // Assuming you have a Booking model

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (err) {
        res.status(400).json({ message: 'Error creating booking', error: err.message });
    }
};

// Get all bookings
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching bookings', error: err.message });
    }
};

// Get a booking by ID
export const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching booking', error: err.message });
    }
};