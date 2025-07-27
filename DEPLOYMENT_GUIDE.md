# 🚀 Trendysty Deployment Guide

## 📋 Overview
This guide will help you deploy the Trendysty e-commerce project to production using:
- **Backend**: Render.com (Free tier available)
- **Website**: Netlify (Customer-facing site)
- **Dashboard**: Netlify (Admin panel)

---

## 🔧 STEP 1: Deploy Backend to Render

### 1.1 Prepare Backend for Deployment
1. **Create a Render account** at [render.com](https://render.com)
2. **Connect your GitHub repository** to Render
3. **Create a new Web Service** and select your repository
4. **Configure the service**:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: `Node`
   - **Root Directory**: `Backend`

### 1.2 Set Environment Variables in Render
Add these environment variables in Render dashboard:
```
PORT=5000
MONGO_URI=mongodb+srv://michaelghannam97:vLmYlku0cO5tjV48@cluster0.kxbobym.mongodb.net/
UPLOADCARE_PUBLIC_KEY=361a29fdb08c5a30c922
NODE_ENV=production
```

### 1.3 Get Your Backend URL
After deployment, Render will provide a URL like:
`https://your-app-name.onrender.com`

**⚠️ IMPORTANT**: Copy this URL - you'll need it for frontend deployments!

---

## 🌐 STEP 2: Deploy Website to Netlify

### 2.1 Prepare Website for Deployment
1. **Update environment variables**:
   - Edit `Website/.env.production`
   - Replace `https://your-backend-url.onrender.com/api` with your actual Render URL

### 2.2 Deploy to Netlify
1. **Create a Netlify account** at [netlify.com](https://netlify.com)
2. **Connect your GitHub repository**
3. **Configure build settings**:
   - **Base directory**: `Website`
   - **Build command**: `npm run build`
   - **Publish directory**: `Website/build`
4. **Add environment variables** in Netlify dashboard:
   ```
   REACT_APP_API_BASE_URL=https://your-backend-url.onrender.com/api
   REACT_APP_ENVIRONMENT=production
   ```

### 2.3 Configure Custom Domain (Optional)
- Add your custom domain in Netlify dashboard
- Update DNS settings as instructed

---

## 🔐 STEP 3: Deploy Dashboard to Netlify

### 3.1 Create Separate Netlify Site for Dashboard
1. **Create a new site** in Netlify (separate from Website)
2. **Connect the same GitHub repository**
3. **Configure build settings**:
   - **Base directory**: `Dashboard`
   - **Build command**: `npm run build`
   - **Publish directory**: `Dashboard/build`
4. **Add environment variables**:
   ```
   REACT_APP_API_BASE_URL=https://your-backend-url.onrender.com/api
   REACT_APP_ENVIRONMENT=production
   ```

### 3.2 Secure Dashboard Access
- Consider using a subdomain like `admin.yourdomain.com`
- Enable password protection in Netlify (Pro plan feature)

---

## 🔄 STEP 4: Update CORS Settings

### 4.1 Update Backend CORS Configuration
Edit `Backend/index.js` to allow your deployed domains:

```javascript
const cors = require('cors');

const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'https://your-website.netlify.app',
    'https://your-dashboard.netlify.app',
    'https://yourdomain.com',
    'https://admin.yourdomain.com'
  ],
  credentials: true
};

app.use(cors(corsOptions));
```

---

## 📱 STEP 5: Test Deployment

### 5.1 Test Backend API
Visit: `https://your-backend-url.onrender.com/api/items`
Should return JSON data.

### 5.2 Test Website
1. Visit your Netlify Website URL
2. Check if products load correctly
3. Test navigation and pages

### 5.3 Test Dashboard
1. Visit your Netlify Dashboard URL
2. Login with: `admin@trendysty.com` / `admin123`
3. Test product management features

---

## 🛠️ STEP 6: Post-Deployment Configuration

### 6.1 Update MongoDB Network Access
1. Go to MongoDB Atlas dashboard
2. **Network Access** → **Add IP Address**
3. Add `0.0.0.0/0` (Allow access from anywhere) for production

### 6.2 Set Up Custom Domains
1. **Website**: `yourdomain.com`
2. **Dashboard**: `admin.yourdomain.com`

### 6.3 Enable HTTPS
- Both Netlify and Render provide free SSL certificates
- Ensure all API calls use HTTPS

---

## 🔍 STEP 7: Monitoring & Maintenance

### 7.1 Monitor Backend Performance
- Check Render dashboard for uptime
- Monitor MongoDB Atlas for database performance

### 7.2 Set Up Analytics
- Add Google Analytics to Website
- Monitor Dashboard usage

### 7.3 Regular Updates
- Keep dependencies updated
- Monitor for security vulnerabilities

---

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**: Update CORS configuration in Backend
2. **API Not Loading**: Check environment variables
3. **Build Failures**: Check Node.js version compatibility
4. **Database Connection**: Verify MongoDB Atlas network access

### Support Resources:
- **Render Docs**: [render.com/docs](https://render.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **MongoDB Atlas**: [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)

---

## 📊 Expected URLs After Deployment

- **Backend API**: `https://your-app.onrender.com`
- **Customer Website**: `https://your-site.netlify.app`
- **Admin Dashboard**: `https://your-dashboard.netlify.app`

---

## 🎉 Congratulations!

Your Trendysty e-commerce platform is now live! 

**Next Steps:**
1. Add products through the Dashboard
2. Test the complete user flow
3. Set up monitoring and analytics
4. Plan for additional features from the PROJECT_ANALYSIS_REPORT.md

**Need Help?** Refer to the troubleshooting section or check the platform documentation.