const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/apartments', { useNewUrlParser: true, useUnifiedTopology: true });

const apartmentSchema = new mongoose.Schema({
  title: String,
  price: Number,
  location: String,
  rooms: Number,
  baths: Number,
  image: String,
  availability: [{ startDate: Date, endDate: Date }]
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

app.use(express.json());

app.get('/apartments', async (req, res) => {
  const apartments = await Apartment.find();
  res.json(apartments);
});

app.get('/apartments/:id', async (req, res) => {
  const id = req.params.id;
  const apartment = await Apartment.findById(id);
  res.json(apartment);
});

app.post('/booking/:id', async (req, res) => {
  const id = req.params.id;
  const { startDate, endDate } = req.body;
  const apartment = await Apartment.findById(id);
  // Check availability and update the apartment's availability
  // For simplicity, this example assumes the dates are available
  apartment.availability.push({ startDate, endDate });
  await apartment.save();
  res.json({ message: 'Booking successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});