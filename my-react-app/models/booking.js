// File: models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    trainId: { type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true },
    date: { type: Date, required: true },
    seats: { type: Number, required: true },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;