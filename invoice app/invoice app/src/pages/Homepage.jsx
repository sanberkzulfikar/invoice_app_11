// pages/Homepage.jsx
import React from 'react';
import InvoiceForm from '../components/InvoiceForm';



const HomePage = () => {
  return (
    <div>
      <h1>Create a New Invoice</h1>
      <InvoiceForm />
      {/* Other content */}
    </div>
  );
};

export default HomePage;
