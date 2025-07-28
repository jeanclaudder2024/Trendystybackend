# Trendysty Netlify Deployment Guide

## Complete Step-by-Step Deployment Instructions

### Prerequisites
- GitHub account
- Netlify account (sign up at netlify.com)
- MongoDB Atlas account (for database)
- Cloudinary account (for image storage)

## 1. Deploy Backend to Netlify

### Step 1: Login to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up or login with your GitHub account

### Step 2: Deploy Backend
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your `Trendystybackend2` repository
4. Configure build settings:
   - **Build command**: `npm install`
   - **Publish directory**: `.`
   - **Functions directory**: `netlify/functions`

### Step 3: Add Environment Variables
In Netlify Dashboard → Site settings → Environment variables, add:
```
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret_key
```

### Step 4: Deploy
- Click **"Deploy site"**
- Your backend will be available at: `https://your-backend-name.netlify.app`
- **Important**: Note down this URL, you'll need it for the frontend apps

## 2. Deploy Dashboard to Netlify

### Step 1: Create New Site
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your `Trendystydashbord` repository

### Step 2: Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `build`

### Step 3: Add Environment Variables
```
REACT_APP_API_URL=https://your-backend-name.netlify.app/.netlify/functions/server/api
```
**Replace `your-backend-name` with your actual backend Netlify URL**

### Step 4: Deploy
- Click **"Deploy site"**
- Your dashboard will be available at: `https://your-dashboard-name.netlify.app`

## 3. Deploy Website to Netlify

### Step 1: Create New Site
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select your `Trendysty` repository

### Step 2: Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `build`

### Step 3: Add Environment Variables
```
REACT_APP_API_URL=https://your-backend-name.netlify.app/.netlify/functions/server/api
```
**Replace `your-backend-name` with your actual backend Netlify URL**

### Step 4: Deploy
- Click **"Deploy site"**
- Your website will be available at: `https://your-website-name.netlify.app`

## 4. Update Backend CORS Settings

After deploying all applications, you need to update the backend CORS settings to allow your deployed frontend URLs.

### Update Backend index.js
Add your deployed URLs to the `allowedOrigins` array in your backend `index.js`:

```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'https://your-dashboard-name.netlify.app',
  'https://your-website-name.netlify.app'
];
```

Then commit and push the changes to trigger a new deployment.

## 5. Testing the Deployment

### Test Backend
- Visit: `https://your-backend-name.netlify.app/.netlify/functions/server/api/health`
- Should return: `{"message": "Server is running!"}`

### Test Dashboard
- Visit: `https://your-dashboard-name.netlify.app`
- Try logging in with admin credentials
- Test product management features

### Test Website
- Visit: `https://your-website-name.netlify.app`
- Browse products
- Test all pages and functionality

## 6. Custom Domain Setup (Optional)

### For each site in Netlify:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

## 7. Environment Variables Reference

### Backend (.env)
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/trendysty
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_secret_key_here
PORT=5000
```

### Dashboard (.env)
```
REACT_APP_API_URL=https://your-backend-name.netlify.app/.netlify/functions/server/api
```

### Website (.env)
```
REACT_APP_API_URL=https://your-backend-name.netlify.app/.netlify/functions/server/api
```

## 8. Troubleshooting

### Common Issues:

1. **Build Fails**
   - Check build logs in Netlify dashboard
   - Ensure all dependencies are in package.json
   - Verify Node.js version compatibility

2. **API Connection Issues**
   - Verify REACT_APP_API_URL is correct
   - Check CORS settings in backend
   - Ensure backend is deployed and running

3. **Environment Variables**
   - Double-check all environment variables are set
   - Restart deployment after adding new variables
   - Ensure no typos in variable names

4. **Database Connection**
   - Verify MongoDB Atlas connection string
   - Check IP whitelist in MongoDB Atlas
   - Ensure database user has proper permissions

## 9. Deployment URLs Summary

After successful deployment, you'll have:

- **Backend API**: `https://your-backend-name.netlify.app/.netlify/functions/server`
- **Dashboard**: `https://your-dashboard-name.netlify.app`
- **Website**: `https://your-website-name.netlify.app`

## 10. Automatic Deployments

Netlify automatically redeploys when you push changes to your GitHub repositories. To manually trigger a deployment:

1. Go to Netlify dashboard
2. Select your site
3. Click "Trigger deploy" → "Deploy site"

## Support

If you encounter issues:
1. Check Netlify build logs
2. Verify all environment variables
3. Test API endpoints manually
4. Check browser console for errors

Your Trendysty e-commerce platform is now fully deployed and connected!