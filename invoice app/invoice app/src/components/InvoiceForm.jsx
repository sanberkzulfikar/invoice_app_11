// src/components/InvoiceForm.jsx
import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import { createInvoice } from '../../services/api';

const InvoiceForm = ({ onInvoiceCreated }) => {
  const [companyName, setCompanyName] = useState('');
  const [invoiceTitle, setInvoiceTitle] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newInvoice = await createInvoice({
        companyName,
        invoiceTitle,
        invoiceDate
      });
      onInvoiceCreated(newInvoice); // Callback to update the parent component's state
      setCompanyName('');
      setInvoiceTitle('');
      setInvoiceDate('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new-invoice-section">
      <form onSubmit={handleSubmit}>
        <TextInput 
          placeholder="Kurum Adı" 
          value={companyName} 
          onChange={(e) => setCompanyName(e.target.value)} 
        />
        <TextInput 
          placeholder="Fatura Tutarı" 
          value={invoiceTitle} 
          onChange={(e) => setInvoiceTitle(e.target.value)} 
        />
        <TextInput 
          type="date" 
          value={invoiceDate} 
          onChange={(e) => setInvoiceDate(e.target.value)} 
        />
        <Button type="submit">
          Kaydet
        </Button>
      </form>
      <img src="./n11.com.svg"/>
    </div>
  );

  
};

export default InvoiceForm;
