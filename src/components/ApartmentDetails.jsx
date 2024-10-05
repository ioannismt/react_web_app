import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const apartments = [
  { id: 1, title: 'Apartment 1', price: 1000, location: '123 Main St, Anytown, USA', rooms: 2, baths: 1, image: 'https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, title: 'Apartment 2', price: 1200, location: '456 Elm St, Anytown, USA', rooms: 3, baths: 2, image: 'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 3, title: 'Apartment 3', price: 1500, location: '789 Oak St, Anytown, USA', rooms: 4, baths: 3, image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
];

const ApartmentDetails = () => {
  const { id } = useParams();
  const apartment = apartments.find(apartment => apartment.id === parseInt(id));

  if (!apartment) return <div>Apartment not found</div>;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">{apartment.title}</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={apartment.image} alt={apartment.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        </div>
        <div className="col-md-6">
          <h2>Details</h2>
          <p>Price: {apartment.price}</p>
          <p>Location: {apartment.location}</p>
          <p>Rooms: {apartment.rooms}</p>
          <p>Baths: {apartment.baths}</p>
          <form>
            <label>Start Date:</label>
            <input type="date" />
            <label>End Date:</label>
            <input type="date" />
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;