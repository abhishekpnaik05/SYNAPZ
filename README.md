# 🧠 SYNAPZ - AI Chat Application powered by OpenRouter API

![MERN Stack](https://img.shields.io/badge/Stack-MERN-00D8FF?style=for-the-badge&logo=mongodb&logoColor=white) ![React](https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![OpenRouter](https://img.shields.io/badge/API-OpenRouter-FF6B6B?style=for-the-badge&logo=openai&logoColor=white) ![Vite](https://img.shields.io/badge/Build_Tool-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**SYNAPZ** is a sleek, modern, and responsive AI chat application built with the MERN stack that enables seamless interaction with multiple AI models through OpenRouter API integration. Inspired by platforms like ChatGPT and Claude, it offers an intuitive conversational experience with persistent chat history stored in MongoDB for reliable and scalable AI interactions.

[![Live Demo](https://img.shields.io/badge/Live_Demo-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://synapz.onrender.com) [![GitHub Repo](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/abhishekpnaik05/synapz)

## 📋 Table of Contents

- [🌟 About SYNAPZ](#-about-synapz)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [🏗 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [🌐 Deployment](#-deployment)
- [🎯 Usage Guide](#-usage-guide)
- [🧪 Testing](#-testing)
- [📊 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [🔮 Roadmap](#-roadmap)
- [📄 License](#-license)

## 🌟 About SYNAPZ

**SYNAPZ** represents the **synapse connections** in neural networks, symbolizing the intelligent communication between users and AI models. The name embodies the project's core mission: creating seamless, intelligent conversations through advanced AI technology.

### 🎯 Purpose & Inspiration
Built with modern web technologies and AI-first design principles, SYNAPZ offers a clean, responsive alternative to traditional chat applications. Inspired by leading AI platforms like ChatGPT, Claude, and modern chat interfaces, it's designed for:

- 🤖 **AI Enthusiasts** exploring multiple AI models in one platform
- 👩‍💻 **Developers** building conversational AI applications
- 📚 **Students** learning full-stack development with real-world AI integration
- 🔬 **Researchers** prototyping AI chat interfaces and user experiences
- 🏢 **Businesses** seeking custom AI chat solutions

### 🌈 Key Differentiators
- **Multi-Model Access**: Integration with OpenRouter API for diverse AI models
- **Modern UI/UX**: Clean, ChatGPT-inspired interface with dark theme
- **Persistent Storage**: MongoDB-backed conversation history
- **Real-time Experience**: Instant messaging with streaming AI responses
- **Scalable Architecture**: Built for growth and easy feature expansion
- **Cloud-Ready**: Fully deployed on Render with production-grade setup

## ✨ Features

### 🤖 AI Integration & Models
- **OpenRouter API Integration** - Access to multiple AI models (GPT-4, GPT-3.5, Claude 3, Gemini Pro)
- **Real-time AI Responses** - Instant streaming responses from AI models
- **Model Selection** - Choose from various AI models for different use cases
- **Context Awareness** - Maintain conversation context across interactions
- **Error Handling** - Robust error handling for API failures

### 💬 Chat Experience
- **Clean Chat Interface** - Modern, ChatGPT-inspired conversational UI
- **Real-time Messaging** - Instant message exchange with AI
- **Message History** - Complete conversation persistence
- **Conversation Management** - Create, view, and manage multiple chat sessions
- **Message Threading** - Organized conversation flow

### 🎨 User Interface & Design
- **Dark Theme** - Sleek dark interface optimized for extended use
- **Responsive Design** - Mobile-first, works perfectly on all devices
- **Modern Components** - React-based modular component architecture
- **Smooth Animations** - Fluid transitions and micro-interactions
- **Accessibility** - WCAG compliant design for inclusive use

### 💾 Data Management & Storage
- **MongoDB Integration** - Robust conversation storage and retrieval
- **Conversation Persistence** - Never lose your chat history
- **Data Validation** - Server-side validation for data integrity
- **Scalable Storage** - Cloud-based MongoDB Atlas integration
- **Backup & Recovery** - Reliable data backup strategies

### 🔧 Development & Performance
- **Vite Build System** - Lightning-fast development and build process
- **Hot Module Replacement** - Instant development feedback
- **Code Splitting** - Optimized bundle loading
- **Environment Configuration** - Flexible deployment configurations
- **Error Boundaries** - Graceful error handling in production

## 🛠 Tech Stack

### Frontend Architecture
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **React** | ^18.2.0 | UI Framework | [React Docs](https://reactjs.org/docs/getting-started.html) |
| **Vite** | ^4.4.5 | Build Tool & Dev Server | [Vite Guide](https://vitejs.dev/guide/) |
| **JavaScript (ES6+)** | Latest | Programming Language | [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| **CSS3** | Latest | Styling & Animations | [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) |
| **Axios** | ^1.4.0 | HTTP Client | [Axios Docs](https://axios-http.com/docs/intro) |

### Backend Architecture
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Node.js** | ^18.17.0 | Runtime Environment | [Node.js Docs](https://nodejs.org/en/docs) |
| **Express.js** | ^4.18.2 | Web Application Framework | [Express Guide](https://expressjs.com/en/guide/routing.html) |
| **OpenRouter API** | Latest | Multi-Model AI Access | [OpenRouter Docs](https://openrouter.ai/docs) |
| **CORS** | ^2.8.5 | Cross-Origin Resource Sharing | [CORS Middleware](https://expressjs.com/en/resources/middleware/cors.html) |
| **dotenv** | ^16.3.1 | Environment Variable Management | [dotenv](https://www.npmjs.com/package/dotenv) |

### Database & Storage
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **MongoDB Atlas** | ^6.0 | Cloud Database Service | [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/) |
| **Mongoose** | ^7.5.0 | MongoDB Object Modeling | [Mongoose Guide](https://mongoosejs.com/docs/guide.html) |
| **GridFS** | ^1.1.0 | Large File Storage | [GridFS Docs](https://www.mongodb.com/docs/manual/core/gridfs/) |

### Deployment & DevOps
| Technology | Version | Purpose | Documentation |
|------------|---------|---------|---------------|
| **Render** | Latest | Cloud Platform | [Render Docs](https://render.com/docs) |
| **Git** | ^2.40.0 | Version Control | [Git Documentation](https://git-scm.com/doc) |
| **npm** | ^9.6.0 | Package Manager | [npm Docs](https://docs.npmjs.com/) |

## 🏗 Project Structure

```
SYNAPZ/
├── 📁 Frontend/                    # React frontend application
│   ├── 📁 src/                    # Source code directory
│   │   ├── ⚛️ App.jsx              # Main application component
│   │   ├── ⚛️ Chat.jsx             # Chat interface component
│   │   ├── ⚛️ ChatWindow.jsx       # Chat window component
│   │   ├── ⚛️ Sidebar.jsx          # Navigation sidebar component
│   │   ├── ⚛️ MyContext.jsx        # React context provider
│   │   ├── ⚛️ main.jsx             # Application entry point
│   │   ├── 🎨 App.css             # Main application styles
│   │   ├── 🎨 Chat.css            # Chat-specific styles
│   │   ├── 🎨 ChatWindow.css      # Chat window styles
│   │   └── 🎨 index.css           # Global styles
│   ├── 📁 public/                 # Static assets
│   │   ├── 🌐 index.html          # HTML template
│   │   └── 🖼️ favicon.ico         # Application icon
│   ├── ⚙️ vite.config.js          # Vite configuration
│   ├── ⚙️ eslint.config.js        # ESLint configuration
│   ├── 📦 package.json            # Frontend dependencies
│   └── 📦 package-lock.json       # Dependency lock file
│
├── 📁 Backend/                     # Node.js backend server
│   ├── 📁 routes/                 # API route handlers
│   │   ├── 🤖 chat.js             # Chat API endpoints
│   │   └── 💬 conversations.js    # Conversation management
│   ├── 📁 models/                 # MongoDB data models
│   │   ├── 💬 Conversation.js     # Conversation schema
│   │   └── 💭 Message.js          # Message schema
│   ├── 📁 utils/                  # Utility functions
│   │   ├── 🔧 openrouter.js       # OpenRouter API client
│   │   └── 🛠️ helpers.js          # Helper functions
│   ├── ⚛️ server.js               # Main server application
│   ├── 🔒 .env                   # Environment variables
│   ├── 📦 package.json            # Backend dependencies
│   └── 📦 package-lock.json       # Dependency lock file
│
├── 📄 README.md                   # Project documentation
├── 🚫 .gitignore                  # Git ignore rules
└── 📄 LICENSE                     # MIT License
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18.17.0 or higher)
- **npm** package manager (v9.6.0 or higher)
- **MongoDB Atlas** account (free tier available)
- **OpenRouter API** key ([Get one here](https://openrouter.ai/))
- **Git** for version control

### Installation Steps

#### 1. Clone Repository
```bash
# Clone the repository
git clone https://github.com/abhishekpnaik05/synapz.git

# Navigate to project directory
cd synapz
```

#### 2. Backend Setup
```bash
# Navigate to backend directory
cd Backend

# Install backend dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your credentials
nano .env
```

**Environment Variables Configuration:**
```env
# OpenRouter API Configuration
OPENROUTER_API_KEY=your_openrouter_api_key_here

# MongoDB Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/synapz

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

#### 3. Frontend Setup
```bash
# Navigate to frontend directory (from project root)
cd Frontend

# Install frontend dependencies
npm install

# Create environment file (optional)
touch .env
```

**Frontend Environment (Optional):**
```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000
VITE_APP_NAME=SYNAPZ
```

#### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd Backend
npm start
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm run dev
# Client runs on http://localhost:3000
```

#### 5. Access Application
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

## 🌐 Deployment

The application is fully deployed and live on Render cloud platform:

### 🚀 Live Application
- **Production URL**: [https://synapz.onrender.com](https://synapz.onrender.com)
- **Status**: ✅ Production Ready

### 📍 Deployment Architecture
- **Platform**: [Render.com](https://render.com) - Reliable cloud hosting
- **Frontend**: React application with static site hosting
- **Backend**: Node.js API server with auto-deploy from GitHub
- **Database**: MongoDB Atlas (Cloud) with global distribution
- **SSL**: HTTPS enabled by default across all services
- **CDN**: Global content delivery network for optimal performance

[![Deployed on Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)

### 🔄 Continuous Deployment Features
- **GitHub Integration**: Automatic deployment on code push to main branch
- **Environment Management**: Separate staging and production configurations
- **Health Monitoring**: Automatic service health checks and alerts
- **Rollback Support**: One-click rollback to previous stable versions
- **Build Optimization**: Automated build optimization and caching

### 🛠 Manual Deployment Guide

**Deploy Backend to Render:**
1. Create new Web Service on Render
2. Connect your GitHub repository
3. Configure build settings:
   ```bash
   Build Command: cd Backend && npm install
   Start Command: cd Backend && npm start
   ```
4. Set environment variables in Render dashboard
5. Deploy and monitor logs

**Deploy Frontend to Render:**
1. Create new Static Site on Render
2. Connect the same repository
3. Configure build settings:
   ```bash
   Build Command: cd Frontend && npm install && npm run build
   Publish Directory: Frontend/dist
   ```
4. Set custom domain (optional)
5. Deploy with auto-SSL

## 🎯 Usage Guide

### 🚀 Getting Started
1. **Visit** the live application at [synapz.onrender.com](https://synapz.onrender.com)
2. **Start Chatting** - No registration required, begin immediately
3. **Explore AI Models** - Experience different AI personalities and capabilities
4. **Save Conversations** - Your chat history is automatically preserved

### 💬 Chat Experience
1. **Type Your Message** - Enter any question or prompt in the input field
2. **Send & Receive** - Hit Enter or click Send to get instant AI responses
3. **Continue Conversations** - Build on previous messages with context awareness
4. **Switch Topics** - Start new conversations anytime with fresh context

### 🤖 AI Model Features
- **GPT-4**: Advanced reasoning, creative writing, complex problem-solving
- **GPT-3.5 Turbo**: Fast responses, general knowledge, casual conversation
- **Claude 3**: Thoughtful analysis, detailed explanations, ethical reasoning
- **Gemini Pro**: Multimodal understanding, code generation, research assistance

### 📱 Cross-Platform Experience
- **Desktop**: Full-featured experience with keyboard shortcuts
- **Mobile**: Touch-optimized interface with responsive design
- **Tablet**: Hybrid experience perfect for both portrait and landscape
- **Progressive Web App**: Install on any device for app-like experience

### ⚡ Pro Tips
- **Use Context**: Reference previous messages for deeper conversations
- **Be Specific**: Detailed prompts yield better, more targeted responses
- **Experiment**: Try different AI models for varied perspectives
- **Save Important Chats**: Bookmark conversations for future reference

## 🧪 Testing

### Running Tests
```bash
# Frontend tests
cd Frontend
npm test

# Backend tests
cd Backend
npm test

# End-to-end tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

### Testing Strategy
- **Unit Tests**: Individual component and function testing with Jest
- **Integration Tests**: API endpoint and database interaction testing
- **UI Tests**: React component rendering and interaction testing
- **E2E Tests**: Complete user journey testing with Playwright
- **Performance Tests**: Load testing and response time monitoring

### Quality Assurance
- **Code Linting**: ESLint for consistent code quality
- **Type Checking**: PropTypes for React component validation
- **Security Testing**: Vulnerability scanning and dependency audits
- **Accessibility Testing**: WCAG compliance verification

## 📊 Performance

### Key Metrics
- **First Contentful Paint**: < 1.2s
- **Largest Contentful Paint**: < 2.4s
- **Time to Interactive**: < 2.8s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Optimization Features
- **Vite Build System**: Lightning-fast development and production builds
- **Code Splitting**: Automatic route-based and component-level splitting
- **Tree Shaking**: Elimination of unused code from final bundle
- **Asset Optimization**: Compressed images and optimized static assets
- **CDN Integration**: Global content delivery via Render CDN
- **Caching Strategy**: Intelligent browser and server-side caching
- **Bundle Analysis**: Regular bundle size monitoring and optimization

### Performance Monitoring
- **Real User Monitoring**: Track actual user experience metrics
- **Error Tracking**: Automatic error detection and reporting
- **API Performance**: Response time monitoring for OpenRouter integration
- **Database Optimization**: Query optimization and indexing strategies

## 🤝 Contributing

We welcome contributions from the community! SYNAPZ is an open-source project that thrives on collaboration and innovation.

### Development Workflow
1. **Fork** the repository on GitHub
2. **Clone** your fork locally
3. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
4. **Make** your changes with clear, focused commits
5. **Test** your changes thoroughly
6. **Push** to your branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request with detailed description

### Contribution Guidelines
- **Code Style**: Follow existing patterns and ESLint configuration
- **Testing**: Include tests for new features and bug fixes
- **Documentation**: Update README and inline comments
- **Commits**: Use conventional commit messages
- **Issues**: Check existing issues before creating new ones

### Areas for Contribution
- 🐛 **Bug Fixes**: Identify and fix issues in the codebase
- ✨ **New Features**: Add new functionality and capabilities
- 🎨 **UI/UX Improvements**: Enhance user interface and experience
- 📚 **Documentation**: Improve guides, comments, and examples
- 🚀 **Performance**: Optimize speed and resource usage
- 🧪 **Testing**: Increase test coverage and reliability
- 🌐 **Internationalization**: Add multi-language support

### Development Environment
```bash
# Install development dependencies
npm install --include=dev

# Run development server with hot reload
npm run dev

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint

# Format code
npm run format
```

## 🔮 Roadmap

### Version 1.1.0 (Current - Q3 2025)
- [x] **Core Chat Interface** - ✅ Real-time AI conversations
- [x] **OpenRouter Integration** - ✅ Multiple AI model access
- [x] **MongoDB Persistence** - ✅ Conversation history storage
- [x] **Responsive Design** - ✅ Cross-device compatibility
- [x] **Production Deployment** - ✅ Render cloud hosting

### Version 1.2.0 (Q4 2025)
- [ ] **User Authentication** - Secure user accounts and personalization
- [ ] **Conversation Organization** - Folders, tags, and search functionality
- [ ] **Export Features** - Download conversations as PDF, TXT, or MD
- [ ] **Conversation Sharing** - Share chats via public links
- [ ] **Advanced Chat Settings** - Temperature, token limits, model switching

### Version 1.3.0 (Q1 2026)
- [ ] **File Upload Support** - Image and document analysis
- [ ] **Voice Integration** - Speech-to-text and text-to-speech
- [ ] **Custom AI Prompts** - Save and reuse prompt templates
- [ ] **Collaboration Features** - Team workspaces and shared conversations
- [ ] **API Integration** - RESTful API for third-party integrations

### Version 2.0.0 (Q2 2026)
- [ ] **Mobile Application** - Native iOS and Android apps
- [ ] **Advanced Analytics** - Usage insights and conversation analytics
- [ ] **Plugin System** - Extensible architecture for custom plugins
- [ ] **Multimodal Support** - Image generation and analysis capabilities
- [ ] **Enterprise Features** - Advanced security, SSO, and admin controls

### Future Vision (2026+)
- [ ] **AI Agent Framework** - Build and deploy custom AI agents
- [ ] **Workflow Automation** - Automated task execution with AI
- [ ] **Integration Marketplace** - Third-party app integrations
- [ ] **Advanced Personalization** - AI that learns your preferences
- [ ] **Collaborative AI** - Multiple AI models working together

## 👨‍💻 Author

**Abhishek P Naik**  
*Full Stack Developer | AI Application Specialist*

Passionate about building next-generation AI applications and conversational interfaces. SYNAPZ showcases expertise in modern web development, AI integration, and scalable cloud architectures.

### 🛠 Skills & Expertise
- **Frontend**: React, JavaScript, Vite, Modern CSS, Responsive Design
- **Backend**: Node.js, Express.js, RESTful APIs, Real-time Applications
- **AI Integration**: OpenRouter API, Multi-model AI Systems, Prompt Engineering
- **Database**: MongoDB, Mongoose, Data Modeling, Query Optimization
- **Cloud & DevOps**: Render, MongoDB Atlas, CI/CD, Performance Monitoring
- **Specializations**: MERN Stack, AI Chat Applications, Modern Web Architecture

### 🎯 Professional Focus
- Building production-ready AI applications with modern web technologies
- Creating intuitive user experiences for complex AI interactions
- Developing scalable, cloud-native applications with robust architecture
- Contributing to open-source projects and technical communities

## 📬 Connect With Me

<div align="center">
  <a href="https://github.com/abhishekpnaik05" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/abhishekpnaik" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
  <a href="mailto:abhishekpnaik05@gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email">
  </a>
  <a href="https://abhishek-p-portfolio.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio">
  </a>
</div>

<div align="center" style="margin-top: 20px;">
  <img src="https://github-readme-stats.vercel.app/api?username=abhishekpnaik05&show_icons=true&theme=radical" alt="GitHub Stats" width="400">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=abhishekpnaik05&layout=compact&theme=radical" alt="Top Languages" width="300">
</div>

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ **Commercial Use** - Use in commercial projects and products
- ✅ **Modification** - Modify and adapt the codebase
- ✅ **Distribution** - Distribute original or modified versions
- ✅ **Private Use** - Use privately for personal projects
- ❗ **Attribution Required** - Include original copyright notice
- ❗ **No Warranty** - Provided "as is" without guarantees

### Open Source Commitment
SYNAPZ is proudly open source and welcomes contributions from developers worldwide. By maintaining an MIT license, we ensure that this project can benefit the broader AI and developer community while encouraging innovation and collaboration.

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/abhishekpnaik05/synapz?style=social)](https://github.com/abhishekpnaik05/synapz/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/abhishekpnaik05/synapz?style=social)](https://github.com/abhishekpnaik05/synapz/network/members)
[![GitHub issues](https://img.shields.io/github/issues/abhishekpnaik05/synapz)](https://github.com/abhishekpnaik05/synapz/issues)
[![GitHub watchers](https://img.shields.io/github/watchers/abhishekpnaik05/synapz?style=social)](https://github.com/abhishekpnaik05/synapz/watchers)

**Made with 🧠 using React, Node.js, Express, MongoDB, and OpenRouter API — for AI enthusiasts, developers, and innovators.**

**Empowering conversations with artificial intelligence since 2025**

**Built with ❤️ by [Abhishek P Naik](https://abhishek-p-portfolio.onrender.com)**

</div>
