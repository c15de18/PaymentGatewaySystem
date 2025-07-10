# 💳 Payment Gateway System

This is a secure Payment Gateway System built using Node.js, Express, MongoDB, and PayPal SDK. It supports user registration, login (with JWT authentication), and payment processing via PayPal.

---

## 🚀 Features

- 🔐 User Authentication using JWT
- 💰 Payment Integration with PayPal
- 🗃️ MongoDB Transaction Logging
- 🧪 RESTful API (Express.js)
- 🖥️ Frontend in HTML, JS
- 📦 Environment-based config with `.env`

---

## 🧰 Tech Stack

- Node.js + Express
- MongoDB + Mongoose
- PayPal Checkout SDK
- JWT (jsonwebtoken)
- HTML, JavaScript (Vanilla)
- dotenv, nodemon

---

## 🗂️ Project Structure

PaymentGatewaySystem/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ ├── .env.example
│ └── package.json
│
├── frontend/
│ ├── login.html
│ ├── index.html
│ ├── script.js
│
└── README.md

---

## 🔧 How to Run the Project

### Backend Setup

1. Go to the backend folder:
   ```bash
   cd backend
2. Install dependencies:
npm install

3.Create your own .env file using the example provided:
cp .env.example .env

4.Fill in your .env with required keys:
MONGO_URI=your_mongo_connection_string
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
JWT_SECRET=your_jwt_secret_key

5.Start the backend:
node server.js

