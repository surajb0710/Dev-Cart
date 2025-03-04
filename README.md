# Dev Cart - eCommerce React App

## Overview
Dev Cart is a modern eCommerce application built using React, Vite, and TailwindCSS for the frontend, with a Node.js and Express backend. The application provides a seamless shopping experience with user authentication, product listings, cart management, and secure payment integration using Stripe and Razorpay.

## Features
- User authentication (Login/Signup)
- Product listing with details
- Add to cart & checkout
- Payment integration with Stripe & Razorpay
- Responsive UI with TailwindCSS
- Toast notifications

## Tech Stack
### Frontend
- React 18
- React Router DOM
- Vite
- TailwindCSS
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary for image storage
- JWT authentication
- Multer for file uploads
- Razorpay & Stripe for payments
- CORS & Dotenv for configuration

## Installation & Setup
### Prerequisites
- Node.js & npm installed
- MongoDB running locally or on MongoDB Atlas
- Cloudinary account for image storage
- Stripe/Razorpay accounts for payment processing

### Clone the Repository
```sh
git clone https://github.com/your-repo/dev-cart.git
cd dev-cart
```

### Setup Frontend
```sh
cd frontend
npm install
npm run dev
```

### Setup Backend
```sh
cd backend
npm install
npm start
```

## Environment Variables
Create a `.env` file in the `backend` directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## Running the Project
- Start the frontend server: `npm run dev` (inside `frontend`)
- Start the backend server: `npm start` (inside `backend`)

## Folder Structure
```
/dev-cart
│── frontend/  # React app
│── backend/   # Node.js backend
│── README.md  # Project documentation
```

## Contributing
Feel free to fork this repo and contribute. Open a pull request with your changes.

## License
This project is licensed under the MIT License.
