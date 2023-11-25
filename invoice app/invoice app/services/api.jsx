// services/api.jsx
import axios from 'axios';

// The base URL for the Invoice API
const API_BASE_URL = 'http://localhost:8000';

// reusable axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createInvoice = async (invoiceData) => {
  try {
    const response = await apiClient.post('/invoices', invoiceData);
    return response.data; // The created invoice object
  } catch (error) {
    console.error('There was an error creating the invoice:', error);
    throw error; // Re-throw the error to handle it in the calling component
  }
};

// Function to fetch all invoices
export const fetchInvoices = async () => {
  try {
    const response = await apiClient.get('/invoices');
    return response.data;
  } catch (error) {
    // Handle error
    // Log it, display a message to the user, etc.
    console.error('There was an error fetching the invoices:', error);
    throw error; // Re-throw the error if you want to handle it in the component
  }
};

// Function to fetch a single invoice by id
export const fetchInvoiceById = async (id) => {
  try {
    const response = await apiClient.get(`/invoices/${id}`);
    return response.data;
  } catch (error) {
    console.error(`There was an error fetching the invoice with id ${id}:`, error);
    throw error;
  }
};


// Function to update an existing invoice
export const updateInvoice = async (id, invoiceData) => {
  try {
    const response = await apiClient.put(`/invoices/${id}`, invoiceData);
    return response.data;
  } catch (error) {
    console.error(`There was an error updating the invoice with id ${id}:`, error);
    throw error;
  }
};

// Function to delete an invoice
export const deleteInvoice = async (id) => {
  try {
    await apiClient.delete(`/invoices/${id}`);
  } catch (error) {
    console.error(`There was an error deleting the invoice with id ${id}:`, error);
    throw error;
  }
};
