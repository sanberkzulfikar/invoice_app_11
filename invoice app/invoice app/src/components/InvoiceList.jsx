// src/components/InvoiceList.jsx
import React from 'react';

const InvoiceList = ({ invoices }) => {
  return (
    <div className="invoice-list">
      <h2>Fatura Listesi</h2>
      <table>
        <thead>
          <tr>
            <th>Kurum Adı</th>
            <th>Fatura Tutarı</th>
            <th>Fatura Tarihi</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.companyName}</td>
              <td>{invoice.invoiceTitle}</td>
              <td>{invoice.invoiceDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
