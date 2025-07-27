#!/bin/bash

# 🔧 UPDATE ENVIRONMENT VARIABLES SCRIPT
# Run this script after deploying your backend to update frontend URLs

echo "🚀 Trendysty Environment Variables Update Script"
echo "================================================"

# Get backend URL from user
read -p "Enter your deployed backend URL (e.g., https://trendysty-backend-xyz.onrender.com): " BACKEND_URL

# Remove trailing slash if present
BACKEND_URL=${BACKEND_URL%/}

# Update Website .env.production
echo "📝 Updating Website environment variables..."
cat > Website/.env.production << EOF
# Production Environment Variables for Website
# Updated on $(date)

REACT_APP_API_BASE_URL=${BACKEND_URL}/api
REACT_APP_ENVIRONMENT=production
EOF

# Update Dashboard .env.production
echo "📝 Updating Dashboard environment variables..."
cat > Dashboard/.env.production << EOF
# Production Environment Variables for Dashboard
# Updated on $(date)

REACT_APP_API_BASE_URL=${BACKEND_URL}/api
REACT_APP_ENVIRONMENT=production
EOF

echo "✅ Environment variables updated successfully!"
echo ""
echo "📋 Updated files:"
echo "  - Website/.env.production"
echo "  - Dashboard/.env.production"
echo ""
echo "🔄 Next steps:"
echo "  1. Commit and push these changes to GitHub"
echo "  2. Redeploy your Netlify sites"
echo "  3. Test the connections"
echo ""
echo "🌐 Your API base URL is now: ${BACKEND_URL}/api"