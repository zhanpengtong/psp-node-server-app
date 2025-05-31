
# PSP Node Server App

This is the backend service for the **Personal Study Planner (PSP)** application. It is built with **Node.js**, **Express.js**, and connects to a MongoDB database. This server provides RESTful APIs to handle user accounts, study goals, schedules, and task management features.

👉 **Frontend repository**: [psp-react-web-app](https://github.com/zhanpengtong/psp-react-web-app)

---

## 🛠️ Tech Stack

- **Node.js** with **Express.js**
- **MongoDB** for persistent storage
- **Mongoose** as ODM (if applicable)
- **CORS**, **Body-Parser**, and other middleware
- RESTful API design

---

## 📁 Project Structure

```
psp-node-server-app/
├── controllers/         # Request handling logic
├── models/              # Mongoose models (User, Task, etc.)
├── routes/              # API endpoints (user, tasks, auth)
├── middleware/          # Auth or error-handling middleware
├── config/              # MongoDB connection & app config
├── .env                 # Environment variables
├── server.js            # Entry point
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zhanpengtong/psp-node-server-app.git
cd psp-node-server-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/psp
```

### 4. Start the server

```bash
npm start
```

Server will run at: `http://localhost:4000`

---

## 📡 API Overview

Example endpoints (exact routes may vary):

- `POST /api/users/register`
- `POST /api/users/login`
- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

---

## 👩‍💻 Author Contribution

This backend project was developed as part of a full-stack system. **Zhanpeng Tong** was primarily responsible for the backend design, API implementation, and server integration.

---

## 📄 License

This project is for educational and portfolio purposes only.
