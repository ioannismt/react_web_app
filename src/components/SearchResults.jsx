import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Apartment from './Apartments';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchResults = () => {
  const { q } = useParams();
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    // For demonstration purposes, use static data instead of fetching from an API
    const staticApartments = [
      { id: 1, title: 'Apartment 1', price: 1000, location: '123 Main St, Anytown, USA', rooms: 2, baths: 1, image: 'https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 2, title: 'Apartment 2', price: 1200, location: '456 Elm St, Anytown, USA', rooms: 3, baths: 2, image: 'https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 3, title: 'Apartment 3', price: 1500, location: '789 Oak St, Anytown, USA', rooms: 4, baths: 3, image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
    ];

    setApartments(staticApartments);
  }, [q]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Search Results for {q}</h1>
      <div className="row">
        {apartments.map(apartment => (
          <div key={apartment.id} className="col-md-4 mb-4">
            <Apartment apartment={apartment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;