// AdmissionForm.js

import React, { useState } from 'react';
import BatchSelection from './BatchSelection'; // Import BatchSelection component
import { validateAge } from '../../utils/validation';
import { submitForm } from '../../api/api';
import './AdmissionForm.css'; // Import your CSS file

// Mock function simulating payment
const CompletePayment = async (userDetails, paymentDetails) => {
  // ... mock payment logic ...
  // For example, assume the payment is successful for demonstration purposes
  return { success: true, message: 'Payment successful' };
};

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    batch: '', // Assuming 'batch' is a string
    dateOfJoining: new Date().toISOString().split('T')[0],
  });
  const [error, setError] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate age
      const isAgeValid = validateAge(formData.age);
      if (!isAgeValid) {
        setError('Age must be between 18 and 65.');
        return;
      }

      // Simulate payment
      const paymentDetails = {
        // Include any relevant payment details if needed
      };
      const paymentResponse = await CompletePayment(formData, paymentDetails);

      // Update payment status in the UI
      setPaymentStatus(paymentResponse);

      // Submit form to backend only if payment is successful
      if (paymentResponse.success) {
        const result = await submitForm(formData);

        // Handle the result, e.g., show a success message or redirect
        console.log('Form submitted successfully:', result);
      }
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div className="admission-form-container">
      <h2>Yoga Class Admission Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </label>
        {/* Include the BatchSelection component */}
        <BatchSelection onSelectBatch={(batch) => setFormData({ ...formData, batch })} />
        {/* ... other input fields ... */}
        <div className="fixed-fee-row">
          <p>Monthly Fee: ₹500</p>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {paymentStatus && (
        <div className={`payment-status ${paymentStatus.success ? 'success' : 'failure'}`}>
          <p>Payment Status: {paymentStatus.success ? 'Successful' : 'Failed'}</p>
          <p>{paymentStatus.message}</p>
        </div>
      )}
    </div>
  );
};

export default AdmissionForm;
