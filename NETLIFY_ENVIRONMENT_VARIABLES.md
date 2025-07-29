# Environment Variables for Netlify Backend Deployment

## Required Environment Variables

Copy these **exact variable names** and add them to your Netlify dashboard:

### 1. MONGO_URI
**Variable Name:** `MONGO_URI`
**Value:** Your MongoDB connection string
**Format:** `mongodb+srv://username:password@cluster.mongodb.net/database_name`

**Where to find it:**
- Go to your MongoDB Atlas dashboard
- Click "Connect" on your cluster
- Choose "Connect your application"
- Copy the connection string
- Replace `<password>` with your actual password

### 2. JWT_SECRET
**Variable Name:** `JWT_SECRET`
**Value:** Any secure random string (32+ characters)
**Example:** `your_super_secure_jwt_secret_key_here_make_it_long_and_random`

**You can generate one:**
- Use any random string generator
- Or create your own secure string

### 3. CLOUDINARY_CLOUD_NAME
**Variable Name:** `CLOUDINARY_CLOUD_NAME`
**Value:** Your Cloudinary cloud name

**Where to find it:**
- Go to your Cloudinary dashboard
- It's shown at the top of your dashboard
- Usually looks like: `your-cloud-name`

### 4. CLOUDINARY_API_KEY
**Variable Name:** `CLOUDINARY_API_KEY`
**Value:** Your Cloudinary API key

**Where to find it:**
- Go to your Cloudinary dashboard
- Look for "API Keys" section
- Copy the "API Key" (numbers only)

### 5. CLOUDINARY_API_SECRET
**Variable Name:** `CLOUDINARY_API_SECRET`
**Value:** Your Cloudinary API secret

**Where to find it:**
- Go to your Cloudinary dashboard
- Look for "API Keys" section
- Copy the "API Secret" (letters and numbers)

## How to Add to Netlify

1. Go to your Netlify dashboard
2. Select your backend site (`trendystybackend.netlify.app`)
3. Go to **Site settings** → **Environment variables**
4. Click **"Add variable"** for each one:

```
Key: MONGO_URI
Value: [your MongoDB connection string]

Key: JWT_SECRET  
Value: [your JWT secret]

Key: CLOUDINARY_CLOUD_NAME
Value: [your Cloudinary cloud name]

Key: CLOUDINARY_API_KEY
Value: [your Cloudinary API key]

Key: CLOUDINARY_API_SECRET
Value: [your Cloudinary API secret]
```

## Example Values (Replace with your actual values)

```
MONGO_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/trendysty
JWT_SECRET=my_super_secure_jwt_secret_key_that_is_very_long_and_random
CLOUDINARY_CLOUD_NAME=my-cloudinary-name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=abcdefghijklmnopqrstuvwxyz123456
```

## After Adding Variables

1. **Save** all environment variables
2. **Trigger a new deploy** in Netlify
3. **Test** the API endpoints

---

**Note:** I cannot provide your actual credential values as I don't have access to your accounts. You need to get these from your MongoDB Atlas and Cloudinary dashboards.