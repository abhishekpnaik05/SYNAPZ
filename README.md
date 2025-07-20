

<div align="center">

# 🧠 SYNAPZ

**AI Chat Application powered by OpenRouter API**

SYNAPZ is a sleek conversational AI chat platform inspired by modern AI chat platforms that enables seamless interaction with multiple AI models via OpenRouter API integration. Built with React and Node.js, it offers a clean, responsive chat interface with persistent conversation storage in MongoDB. The application is deployed on Render, ensuring reliable cloud hosting and scalable performance for users seeking an intuitive AI chat experience.

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](#)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#)
[![React](https://img.shields.io/badge/React-18+-61dafb.svg)](#)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](#)

[🚀 Live Demo](https://synapz.onrender.com/)

</div>

---

## ✨ Features

- **Clean Chat Interface** - Modern, responsive chat UI similar to ChatGPT
- **OpenRouter Integration** - Access to multiple AI models through OpenRouter API
- **Real-time Chat** - Instant messaging with AI responses
- **Dark Theme** - Sleek dark interface for better user experience
- **MongoDB Integration** - Persistent conversation storage in MongoDB
- **Cloud Deployment** - Deployed on Render for reliable hosting
- **Responsive Design** - Works on desktop and mobile devices

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | Database | Deployment | API |
|----------|---------|----------|------------|-----|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) | ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) | ![OpenRouter](https://img.shields.io/badge/OpenRouter-FF6B6B?style=for-the-badge&logo=openai&logoColor=white) |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) | 
| ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) | ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) | ![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ||

</div>

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **OpenRouter API Key**
- **MongoDB** (local or MongoDB Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhishekpnaik05/synapz.git
   cd synapz
   ```

2. **Install backend dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

4. **Environment Setup**
   
   Create `.env` file in the Backend folder:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   MONGODB_URI=mongodb://localhost:27017/synapz
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/synapz
   PORT=5000
   NODE_ENV=development
   ```

5. **Start the backend server**
   ```bash
   cd Backend
   npm start
   # or
   node server.js
   ```

6. **Start the frontend**
   ```bash
   cd Frontend
   npm start
   ```

7. **Open your browser**
   
   Visit `http://localhost:3000` to use SYNAPZ

---

## 📁 Project Structure

```
SYNAPZ/
├── 📁 Backend/
│   ├── 📁 models/           # Data models
│   ├── 📁 node_modules/     # Dependencies
│   ├── 📁 routes/           # API routes
│   ├── 📁 utils/            # Utility functions
│   ├── 📄 .env              # Environment variables
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   └── 📄 server.js         # Main server file
│
├── 📁 Frontend/
│   ├── 📁 node_modules/     # Dependencies
│   ├── 📁 public/           # Static files
│   ├── 📁 src/
│   │   ├── 📄 App.css       # Main styles
│   │   ├── 📄 App.jsx       # Main App component
│   │   ├── 📄 Chat.css      # Chat styles
│   │   ├── 📄 Chat.jsx      # Chat component
│   │   ├── 📄 ChatWindow.css
│   │   ├── 📄 ChatWindow.jsx
│   │   ├── 📄 index.css     # Global styles
│   │   ├── 📄 main.jsx      # Entry point
│   │   ├── 📄 MyContext.jsx # Context provider
│   │   └── 📄 Sidebar.jsx   # Sidebar component
│   ├── 📄 .gitignore
│   ├── 📄 eslint.config.js
│   ├── 📄 index.html
│   ├── 📄 package-lock.json
│   ├── 📄 package.json
│   └── 📄 vite.config.js
│
├── 📄 .gitignore
└── 📄 README.md
```

---

## 🔧 Configuration

### OpenRouter API & MongoDB Setup

1. **Get your OpenRouter API key** from [OpenRouter](https://openrouter.ai/)
2. **Set up MongoDB:**
   - **Local**: Install MongoDB locally
   - **Cloud**: Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/atlas)
3. **Add credentials to your `.env` file** in the Backend folder
4. **Available models** through OpenRouter:
   - GPT-4
   - GPT-3.5 Turbo  
   - Claude 3
   - Gemini Pro
   - And many more!

### API Routes

Your backend likely includes routes like:
```javascript
// Example API endpoints
GET  /api/chat/history     // Get chat history from MongoDB
POST /api/chat/message     // Send message to AI & save to DB
POST /api/chat/new         // Start new conversation
GET  /api/chat/:id         // Get specific conversation
DELETE /api/chat/:id       // Delete conversation
```

---

## 🛠️ Development

### Running in Development Mode

**Backend:**
```bash
cd Backend
npm run dev  # if you have nodemon
# or
node server.js
```

**Frontend:**
```bash
cd Frontend
npm run dev
```

### Building for Production

**Frontend:**
```bash
cd Frontend
npm run build
```

---

## 🚀 Deployment

### Live Deployment on Render

This project is deployed on **Render** with the following setup:

**Backend (Render Web Service):**
- Automatically deploys from GitHub
- Environment variables configured in Render dashboard
- MongoDB connection via MongoDB Atlas

**Frontend:**
- Can be deployed separately on Render Static Sites
- Or served from the same backend instance

### Deployment Steps

1. **Prepare your MongoDB Atlas cluster**
   - Create a cluster on MongoDB Atlas
   - Get your connection string
   - Whitelist IP addresses (0.0.0.0/0 for Render)

2. **Deploy Backend to Render:**
   ```bash
   # Push your code to GitHub first
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```
   
   - Create new Web Service on Render
   - Connect your GitHub repository
   - Set build command: `cd Backend && npm install`
   - Set start command: `cd Backend && npm start`

3. **Environment Variables on Render:**
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key
   MONGODB_URI=your_mongodb_atlas_connection_string
   NODE_ENV=production
   PORT=10000
   ```

4. **Deploy Frontend:**
   - Create new Static Site on Render
   - Build command: `cd Frontend && npm run build`
   - Publish directory: `Frontend/dist`

---

## 🎯 Usage

1. **Start a new chat** by typing in the input field
2. **Send messages** to interact with AI models
3. **View responses** in real-time
4. **Navigate conversations** using the sidebar
5. **Enjoy chatting** with various AI models!

---

## 🤝 Contributing

1. **Fork the project**
2. **Create your feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/abhishekpnaik05/synapz/issues)
- **Email**: abhishekpnaik05@gmail.com

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgments

- **OpenRouter** for providing access to multiple AI models
- **MongoDB** for reliable database storage
- **Render** for seamless cloud deployment
- **React** for the frontend framework
- **Node.js** for the backend runtime
- **Vite** for fast frontend development

---

<div align="center">

**Built with ❤️ using OpenRouter API, MongoDB & Render**


</div>
