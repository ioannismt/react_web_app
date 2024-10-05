import React, { useState } from 'react';

const BookingForm = ({ apartment }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [availability, setAvailability] = useState(null);

    const handleBooking = (e) => {
        e.preventDefault();
        // Simulate checking availability
        const availabilityStatus = Math.random() < 0.5 ? 'Available' : 'Not Available';
        setAvailability(availabilityStatus);
    };

    return (
        <form onSubmit={handleBooking}>
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <br />
            <label>End Date:</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <br />
            <button type="submit">Check Availability</button>
            {availability && <p>Availability: {availability}</p>}
        </form>
    );
};

export default BookingForm;
