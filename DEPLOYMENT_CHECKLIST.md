# 📋 Deployment Checklist for Trendysty

## ✅ Pre-Deployment Checklist

### Backend Preparation
- [ ] MongoDB Atlas database is accessible from anywhere (0.0.0.0/0)
- [ ] Environment variables are properly set
- [ ] CORS configuration includes production domains
- [ ] All dependencies are listed in package.json

### Frontend Preparation (Website & Dashboard)
- [ ] Environment variables are configured for production
- [ ] API base URLs point to production backend
- [ ] Build process works locally (`npm run build`)
- [ ] No console errors in production build

## 🚀 Deployment Steps

### 1. Deploy Backend (Render.com)
- [ ] Create Render account
- [ ] Connect GitHub repository
- [ ] Configure build settings (Root: `Backend`)
- [ ] Set environment variables
- [ ] Deploy and get production URL
- [ ] Test API endpoints

### 2. Deploy Website (Netlify)
- [ ] Update `.env.production` with backend URL
- [ ] Create Netlify account
- [ ] Connect GitHub repository
- [ ] Configure build settings (Base: `Website`)
- [ ] Set environment variables
- [ ] Deploy and test

### 3. Deploy Dashboard (Netlify)
- [ ] Update `.env.production` with backend URL
- [ ] Create separate Netlify site
- [ ] Configure build settings (Base: `Dashboard`)
- [ ] Set environment variables
- [ ] Deploy and test admin login

## 🔍 Post-Deployment Testing

### Backend Testing
- [ ] API responds at: `https://your-backend.onrender.com/api/items`
- [ ] Authentication endpoints work
- [ ] File upload functionality works
- [ ] Database operations are successful

### Website Testing
- [ ] Homepage loads correctly
- [ ] Products display properly
- [ ] Navigation works
- [ ] API calls are successful
- [ ] Images load correctly

### Dashboard Testing
- [ ] Login page loads
- [ ] Admin login works (`admin@trendysty.com` / `admin123`)
- [ ] Product management functions work
- [ ] Image uploads work
- [ ] Content management works

## 🛠️ Configuration Updates

### Update CORS in Backend
```javascript
const corsOptions = {
  origin: [
    'https://your-website.netlify.app',
    'https://your-dashboard.netlify.app'
  ],
  credentials: true
};
```

### Environment Variables to Set

#### Render (Backend)
```
PORT=5000
MONGO_URI=mongodb+srv://...
UPLOADCARE_PUBLIC_KEY=361a29fdb08c5a30c922
NODE_ENV=production
```

#### Netlify (Website & Dashboard)
```
REACT_APP_API_BASE_URL=https://your-backend.onrender.com/api
REACT_APP_ENVIRONMENT=production
```

## 🎯 Success Criteria

- [ ] All three applications are live and accessible
- [ ] Backend API responds correctly
- [ ] Website displays products from database
- [ ] Dashboard allows admin operations
- [ ] No CORS errors in browser console
- [ ] All images load properly
- [ ] Authentication works end-to-end

## 📞 Support Resources

- **Render Support**: [render.com/docs](https://render.com/docs)
- **Netlify Support**: [docs.netlify.com](https://docs.netlify.com)
- **MongoDB Atlas**: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)

---

**🎉 Once all items are checked, your Trendysty platform is successfully deployed!**