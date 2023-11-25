import React, { useState } from 'react';
import TextInput from '../components/TextInput'; 
import Button from '../components/Button'; 


const NewInvoiceForm = ({ onAddInvoice }) => {
  const [companyName, setCompanyName] = useState('');
  const [invoiceTitle, setInvoiceTitle] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddInvoice({ companyName, invoiceTitle, invoiceDate });
    setCompanyName('');
    setInvoiceTitle('');
    setInvoiceDate('');
  };

  return (
    <div className="new-invoice-section">
      <form onSubmit={handleSubmit}>
        <TextInput value={companyName} onChange={e => setCompanyName(e.target.value)} placeholder="Kurum Adı" />
        <TextInput value={invoiceTitle} onChange={e => setInvoiceTitle(e.target.value)} placeholder="Fatura Tutarı" />
        <TextInput value={invoiceDate} onChange={e => setInvoiceDate(e.target.value)} placeholder="Fatura Tarihi" type="date" />
        <Button>Kaydet</Button>
      </form>
    </div>
  );
};

export default NewInvoiceForm