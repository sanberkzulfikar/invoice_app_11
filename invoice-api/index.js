const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); 

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const invoices = []; // This will store our invoices. Needs to be replaced with a real database in production.

app.get('/invoices', (req, res) => {
  res.json(invoices.sort((a, b) => new Date(b.date) - new Date(a.date))); // Send newest first
});

app.post('/invoices', (req, res) => {
  const invoice = req.body;
  invoice.id = invoices.length + 1; // Simple ID assignment, needs to be replaced with a better ID generator
  invoices.push(invoice);
  res.status(201).json(invoice);
});

app.put('/invoices/:id', (req, res) => {
  const { id } = req.params;
  const index = invoices.findIndex(inv => inv.id.toString() === id);
  if (index === -1) return res.status(404).json({ message: 'Invoice not found' });

  const updatedInvoice = { ...invoices[index], ...req.body };
  invoices[index] = updatedInvoice;
  res.json(updatedInvoice);
});

app.delete('/invoices/:id', (req, res) => {
  const { id } = req.params;
  const index = invoices.findIndex(inv => inv.id.toString() === id);
  if (index === -1) return res.status(404).json({ message: 'Invoice not found' });

  invoices.splice(index, 1);
  res.status(204).send();
});
