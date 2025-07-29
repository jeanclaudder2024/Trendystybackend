# 🚀 EXACT NETLIFY ENVIRONMENT VARIABLES

## Copy these EXACT values to your Netlify dashboard:

### Go to: Netlify Dashboard → trendystybackend.netlify.app → Site settings → Environment variables

**Add these 3 variables:**

### 1. MONGO_URI
```
Key: MONGO_URI
Value: mongodb+srv://michaelghannam97:vLmYlku0cO5tjV48@cluster0.kxbobym.mongodb.net/trendysty
```

### 2. JWT_SECRET
```
Key: JWT_SECRET
Value: trendysty_super_secure_jwt_secret_key_2024_make_it_long_and_random
```

### 3. UPLOADCARE_PUBLIC_KEY
```
Key: UPLOADCARE_PUBLIC_KEY
Value: 361a29fdb08c5a30c922
```

## Steps:
1. ✅ Copy each Key and Value exactly
2. ✅ Add them to Netlify environment variables
3. ✅ Click "Save" 
4. ✅ Trigger a new deploy
5. ✅ Test the API endpoints

## After Adding Variables:
Your backend API should work at:
- `https://trendystybackend.netlify.app/api/auth`
- `https://trendystybackend.netlify.app/api/items`

---
**IMPORTANT:** Add these to Netlify NOW, then redeploy!