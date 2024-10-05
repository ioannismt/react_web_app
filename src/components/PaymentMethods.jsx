import React from 'react';

const PaymentMethods = () => {
  return (
    <div className="payment-methods">
      <h2>Payment Methods</h2>
      <div className="row">
        <div className="col-md-4">
          <img src="https://example.com/payment-method-1.png" alt="Payment Method 1" />
        </div>
        <div className="col-md-4">
          <img src="https://example.com/payment-method-2.png" alt="Payment Method 2" />
        </div>
        <div className="col-md-4">
          <img src="https://example.com/payment-method-3.png" alt="Payment Method 3" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;