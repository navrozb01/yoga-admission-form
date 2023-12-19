# Yoga Class Admission Form Project

This project is a web application for handling admission forms for Yoga classes. It allows users to submit their details, choose a batch, and make monthly payments.

## Project Structure

### Frontend (React)

#### Folder Structure

The frontend follows a modular structure:

- `src/components`: Contains React components.
- `src/api`: Includes API interaction functions.
- `src/utils`: Holds utility functions.

#### Key Files

- `src/components/AdmissionForm`: Main component for the admission form.
- `src/api/api.js`: API interaction functions.
- `src/utils/validation.js`: Validation functions.

### Backend (Node.js with Express)

#### Folder Structure

The backend follows a simplea structure:

- `yoga-admission-form/server/server.js`: Contains erverything related to backend.

## Assumptions

1. **Monthly Fee:**
   - A fixed monthly fee of 500 INR is assumed.

2. **Batch Shifting:**
   - Users can shift between batches each month but are restricted from changes within the same month.

3. **Payment Processing:**
   - A mock function named `CompletePayment()` is assumed for payment processing.

4. **Age Limit:**
   - Enrollment is restricted to individuals aged between 18 and 65.

5. **Database:**
   - SQLite is chosen for simplicity in the local environment.

## Getting Started

1. **Frontend:**
   - Navigate to the `yoga-admission-form` directory and run `npm install`.
   - Run `npm start` to start the development server.

2. **Backend:**
   - Navigate to the `yoga-admission-form/server` directory and run `npm install`.
   - Run `node serve.js` to start the Express server.

3. **Database:**
   - Ensure SQLite is installed for local development. The database file is named `yoga.db`.

4. **API Endpoint:**
   - Update the API endpoint in the frontend code (e.g., `src/api/api.js`) based on your backend deployment.

## Future Improvements

- Implement user authentication for more secure data handling.
- Enhance styling and user interface for a better user experience.
- Integrate with a production-grade database for scalability.

Feel free to contribute or open issues for any suggestions or improvements.

