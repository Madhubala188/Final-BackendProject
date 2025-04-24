import express from 'express';
import bookingRoutes from './routes/bookingRoutes.js';
import trainRoutes from './routes/trainRoutes.js';

const app = express();

app.use(express.json());

// Use the routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/trains', trainRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));