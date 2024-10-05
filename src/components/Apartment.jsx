import React from 'react';
import styled from 'styled-components';

const ApartmentContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Apartment = ({ apartment }) => {
  return (
    <ApartmentContainer>
      <h2>{apartment.title}</h2>
      <p>Price: {apartment.price}</p>
      <p>Location: {apartment.location}</p>
      <p>Rooms: {apartment.rooms}</p>
      <p>Baths: {apartment.baths}</p>
    </ApartmentContainer>
  );
};

export default Apartment;