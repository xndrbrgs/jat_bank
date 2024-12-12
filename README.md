# JAT Banking

## Overview

This repository contains the source code for JAT Banking, a money transfer application built using modern web technologies. 
The app provides secure, seamless, and real-time financial transactions, including user authentication, account management, and payment processing.

---

## Features

- **User Authentication:** Secure sign-up, login, and two-factor authentication.
- **Money Transfers:** Peer-to-peer money transfer functionality.
- **Payment Processing:** Integration with third-party payment gateways.
- **Transaction Tracking:** Real-time transaction history.
- **Notifications:** Push and email notifications for transactions and updates.
- **Security:** End-to-end encryption and fraud prevention mechanisms.
- **Admin Dashboard:** Monitor transactions, manage users, and generate reports.

---

## Technologies Used

- **Frontend:**

  - Framework: Next.js (React-based)
  - Styling: Tailwind CSS

- **Backend:**

  - Framework: Node.js with Express
  - Database: Appwrite
  - Authentication: Auth0

- **Additional Tools:**

  - Payment Gateway: Stripe or PayPal
  - Notifications: Twilio (SMS), Firebase Cloud Messaging
  - Hosting: Vercel (Frontend), AWS (Backend/Database)

---

## Getting Started

### Prerequisites

- Node.js v16 or higher
- Plaid API keys (or alternative payment gateway keys)
- Dwolla API keys

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/xndrbrgs/jat_bank.git
   cd cashapp-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=your_database_url
     PLAID_SECRET_KEY=your_stripe_key
     etc...
     ```

4. Migrate the database:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend: [http://localhost:5000](http://localhost:5000)

---

## Usage

- Sign up and create a secure account.
- Add payment methods via the "Wallet" section.
- Transfer money to other users using their unique ID or QR code.
- Monitor transaction history and account balance.
- Receive real-time notifications for each successful transaction.

---

## Deployment

### Frontend

- Deploy to Vercel:
  ```bash
  vercel
  ```

### Backend

- Deploy to AWS or any Node.js-compatible server.

### Database

- Host on Vercel.

---

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For inquiries or support, please contact Alex Borges at aborgescolon@gmail.com.

