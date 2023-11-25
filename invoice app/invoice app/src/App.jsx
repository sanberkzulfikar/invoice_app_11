// src/App.jsx
import React, { useState, useEffect } from 'react';
import InvoiceForm from './components/InvoiceForm';
import InvoiceList from './components/InvoiceList';
import { fetchInvoices } from '../services/api';
import './InvoiceApp.css'

const App = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const loadInvoices = async () => {
      const fetchedInvoices = await fetchInvoices();
      setInvoices(fetchedInvoices);
    };
    loadInvoices();
  }, []);

  const handleInvoiceCreated = (newInvoice) => {
    // Prepend the new invoice to the beginning of the list
    setInvoices([newInvoice, ...invoices]);
  };

  return (
    <div>
      <InvoiceForm onInvoiceCreated={handleInvoiceCreated} />
      <InvoiceList invoices={invoices} />
    </div>
  );
};

export default App;