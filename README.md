# 🔐 MERN Authentication App

A full-stack authentication system built using the **MERN stack** — MongoDB, Express.js, React, and Node.js.  
This project demonstrates secure user authentication with JWT, password hashing, and protected routes.

---

## 🚀 Features

- ✅ User Registration (Sign Up)
- ✅ User Login
- ✅ JWT-based Authentication
- ✅ Protected Routes
- ✅ Password Hashing with bcrypt
- ✅ RESTful API Architecture
- ✅ Frontend & Backend Separation

---

## 🛠 Tech Stack

### Frontend
- **React** - UI Library
- **React Router** - Client-side Routing
- **Axios** - HTTP Client
- **Context API** - State Management
- **CSS** - Styling

### Backend
- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM for MongoDB
- **JSON Web Token (JWT)** - Authentication
- **bcrypt** - Password Hashing
- **dotenv** - Environment Variables

---

## 📁 Project Structure
```
MERN-AUTH-APP/
│
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│
├── server/                 # Backend (Node + Express)
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **server** directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/TabasumAli/MERN-AUTH-APP.git
cd MERN-AUTH-APP
```

### 2️⃣ Backend Setup
```bash
cd server
npm install
npm run dev
```

**Backend runs on:** `http://localhost:5000`

### 3️⃣ Frontend Setup
```bash
cd client
npm install
npm run dev
```

**Frontend runs on:** `http://localhost:5173`

---

## 🌐 API Endpoints

| Method | Endpoint           | Description          | Authentication |
|--------|-------------------|----------------------|----------------|
| POST   | `/api/auth/register` | Register a new user  | No             |
| POST   | `/api/auth/login`    | Login user           | No             |
| GET    | `/api/auth/profile`  | Protected user route | Yes (JWT)      |

---

## 🔐 Authentication Flow

1. **User signs up** with email and password
2. **Password is hashed** using bcrypt
3. **JWT token is generated** on login
4. **Token is sent** to frontend
5. **Protected routes verify JWT** before granting access

---

## 🧪 Testing

- Use **Postman** or **Insomnia** to test backend APIs
- Pass **JWT in request headers** for protected routes:
```
  Authorization: Bearer <your_jwt_token>
```

---

## 📌 Future Enhancements

- [ ] Refresh Tokens
- [ ] Email Verification
- [ ] Forgot / Reset Password
- [ ] Role-based Authorization (RBAC)
- [ ] Improved UI & Styling
- [ ] Input Validation & Error Handling
- [ ] Rate Limiting
- [ ] Session Management

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Tabasum Ali**  
MERN Stack Developer

[![GitHub](https://img.shields.io/badge/GitHub-TabasumAli-181717?style=flat&logo=github)](https://github.com/TabasumAli)

---

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact via email

---

**⭐ If you found this project helpful, please give it a star!**
