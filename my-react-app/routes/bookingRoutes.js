// File: routes/bookingRoutes.js
import express from 'express';
import { createBooking, getAllBookings, getBookingById } from '../controllers/bookingController.js';

const router = express.Router();

// Route to create a new booking
router.post('/', createBooking);

// Route to get all bookings
router.get('/', getAllBookings);

// Route to get a booking by ID
router.get('/:id', getBookingById);

export default router;