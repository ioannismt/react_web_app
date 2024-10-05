import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  // Mock data for apartments, replace with actual API call
  const [apartments, setApartments] = useState([
    { id: 1, name: 'Apartment 1' },
    { id: 2, name: 'Apartment 2' },
    { id: 3, name: 'Apartment 3' },
    // Add more apartments as needed
  ]);

  const [selectedApartment, setSelectedApartment] = useState(null);

  const handleApartmentClick = (apartment) => {
    // Set the selected apartment without redirecting
    setSelectedApartment(apartment);
  };

  return (
    <div className="container-fluid">
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Rental Apartments</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link">Search Apartments</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="/apartments" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Apartments
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {apartments.map((apartment) => (
                    <li key={apartment.id}>
                      <button className="dropdown-item" onClick={() => handleApartmentClick(apartment)}>
                        {apartment.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {selectedApartment && (
        <div className="container mt-5">
          <h2>Selected Apartment: {selectedApartment.name}</h2>
          <p>Details will be displayed here.</p>
          {/* Add more details as needed */}
          <Link to={`/apartment/${selectedApartment.id}`} className="btn btn-primary">View Details</Link>
        </div>
      )}
      <div className="hero" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5205376/pexels-photo-5205376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
        <h1>Welcome to Rental Apartments</h1>
      </div>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Find Your Dream Apartment</h1>
        <SearchBar />
        <Link to="/search" className="btn btn-primary">View All Apartments</Link>
      </div>
    </div>
  );
};

export default Home;
