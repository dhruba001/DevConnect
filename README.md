# DevConnect

**DevConnect** is a full-stack social networking platform built for developers to connect, collaborate, and discover like-minded professionals.  
It's powered by **Node.js**, **Express**, and **MongoDB**, emphasizing clean architecture, robust REST API design, and secure authentication.

---

## 🚀 Features

### 🧑‍💻 User Authentication
- Signup, login, and logout functionality.
- JWT-based authentication and secure session handling.
- Password hashing with `bcrypt`.

### 👤 Profile Management
- Create and update developer profiles (name, email, skills, gender, about, etc.).
- Profile photo support with default placeholders.
- Strong input validation using `validator` and Mongoose schema rules.

### 🤝 Connection System
- Browse and connect with other developers based on shared interests or skills.
- Send, accept, or reject connection requests.
- Personalized feed displaying potential matches.

### 🧠 Data Handling
- MongoDB with Mongoose ODM for schema-based modeling.
- Built-in validators for clean, structured data.
- Automatic timestamps (`createdAt`, `updatedAt`).

### ⚙️ API Design
- RESTful endpoints following modular and scalable design.
- Centralized error handling with middleware.
- Protected routes with token-based authorization.

---

## 🧱 Tech Stack

| Layer | Technology |
|--------|-------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB (Mongoose ODM) |
| **Authentication** | JSON Web Token (JWT) |
| **Validation** | Validator.js, Mongoose |
| **Security** | bcrypt, helmet, cors |
| **Environment Management** | dotenv |

---

## 📁 Folder Structure
devconnect/
│
├── src/
│   ├── models/          # Mongoose models (User, ConnectionRequest, etc.)
│   ├── routes/          # Express route handlers
│   ├── controllers/     # Business logic for routes
│   ├── middlewares/     # Auth, error handling, and validation
│   ├── db/              # MongoDB connection setup
│   ├── utils/           # Utility functions and helpers
│   └── app.js           # Main application entry point
│
├── .env                 # Environment variables (DB_URI, JWT_SECRET, etc.)
├── package.json
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/devconnect.git
cd devconnect
2. Install dependencies
bashnpm install
3. Configure environment variables
Create a .env file in the project root:
envPORT=3000
MONGODB_URI=mongodb+srv://<your-db-url>
JWT_SECRET=your_secret_key
4. Run the application
For development:
bashnpm run dev
For production:
bashnode src/app.js
5. Test the APIs
Use Postman or Thunder Client to test routes like:

POST /signup
POST /login
GET /user/:id
PATCH /user/:id

---

### 🧠 Key Concepts Demonstrated

RESTful API Design Principles
JWT Authentication & Authorization
MongoDB Relationships & Population
Request Validation & Sanitization
Middleware Architecture
Error Handling Framework
Data Security Practices

---

🧩 Future Enhancements

Real-time chat and notifications
Frontend integration with React
Advanced recommendation system
Cloud image storage (e.g., AWS S3 / Cloudinary)

---

### 👨‍💻 Author
Dhruba Goswami
Full-Stack Developer | JavaScript | React | Node.js
GitHub: @dhruba001

---
