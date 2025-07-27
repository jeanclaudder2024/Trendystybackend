# 🛍️ Trendysty E-commerce Platform

A modern, full-stack e-commerce platform built with React, Node.js, Express, and MongoDB.

## 🏗️ Project Structure

```
Trendysty/
├── Backend/          # Node.js/Express API Server
├── Website/          # Customer-facing React App
├── Dashboard/        # Admin Panel React App
├── DEPLOYMENT_GUIDE.md
├── DEPLOYMENT_CHECKLIST.md
└── PROJECT_ANALYSIS_REPORT.md
```

## 🚀 Features

### ✅ **Implemented Features**
- **Product Management** - Full CRUD operations for products
- **Image Upload** - GridFS-based file storage
- **User Authentication** - JWT-based admin authentication
- **Content Management** - Dynamic page content editing
- **Responsive Design** - Mobile-friendly interface
- **Admin Dashboard** - Product and content management
- **Category System** - 14 predefined product categories

### 🔄 **In Development**
- Shopping Cart System
- User Registration & Login
- Order Management
- Payment Integration
- Customer Management

## 🛠️ Tech Stack

### **Backend**
- Node.js & Express.js
- MongoDB with Mongoose
- GridFS for file storage
- JWT Authentication
- Cloudinary integration
- CORS enabled

### **Frontend (Website)**
- React 19
- Material-UI (MUI)
- Axios for API calls
- React Router
- Responsive design

### **Frontend (Dashboard)**
- React 19
- Material-UI (MUI)
- React Router
- Admin authentication
- File upload interface

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/jeanclaudder2024/Trendystybackend.git
cd Trendysty
```

2. **Install all dependencies**
```bash
npm run install-all
```

3. **Set up environment variables**
```bash
# Backend/.env
PORT=5000
MONGO_URI=your_mongodb_connection_string
UPLOADCARE_PUBLIC_KEY=your_uploadcare_key
```

4. **Start development servers**
```bash
# Terminal 1 - Backend
npm run dev-backend

# Terminal 2 - Website
npm run dev-website

# Terminal 3 - Dashboard
npm run dev-dashboard
```

### 🌐 **Access URLs**
- **Backend API**: http://localhost:5000
- **Customer Website**: http://localhost:3001
- **Admin Dashboard**: http://localhost:3000

### 🔐 **Admin Login**
- **Email**: `admin@trendysty.com`
- **Password**: `admin123`

## 📦 Deployment

### Production Deployment
1. **Backend** → Deploy to Render.com
2. **Website** → Deploy to Netlify
3. **Dashboard** → Deploy to Netlify (separate site)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📊 Project Status

- **Website**: 35% Complete
- **Backend**: 40% Complete  
- **Dashboard**: 45% Complete
- **Overall System**: 40% Complete

See [PROJECT_ANALYSIS_REPORT.md](./PROJECT_ANALYSIS_REPORT.md) for detailed analysis.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team**: Trendysty Development Team
- **Project Type**: E-commerce Platform
- **Status**: Active Development

## 📞 Support

For support and questions:
- Create an issue in this repository
- Check the [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for deployment help
- Review [PROJECT_ANALYSIS_REPORT.md](./PROJECT_ANALYSIS_REPORT.md) for feature status

---

**🎉 Happy coding with Trendysty!**