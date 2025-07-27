@echo off
echo 🚀 Trendysty Environment Variables Update Script
echo ================================================
echo.

set /p BACKEND_URL="Enter your deployed backend URL (e.g., https://trendysty-backend-xyz.onrender.com): "

REM Remove trailing slash if present
if "%BACKEND_URL:~-1%"=="/" set BACKEND_URL=%BACKEND_URL:~0,-1%

echo.
echo 📝 Updating Website environment variables...
(
echo # Production Environment Variables for Website
echo # Updated on %date% %time%
echo.
echo REACT_APP_API_BASE_URL=%BACKEND_URL%/api
echo REACT_APP_ENVIRONMENT=production
) > Website\.env.production

echo 📝 Updating Dashboard environment variables...
(
echo # Production Environment Variables for Dashboard
echo # Updated on %date% %time%
echo.
echo REACT_APP_API_BASE_URL=%BACKEND_URL%/api
echo REACT_APP_ENVIRONMENT=production
) > Dashboard\.env.production

echo.
echo ✅ Environment variables updated successfully!
echo.
echo 📋 Updated files:
echo   - Website\.env.production
echo   - Dashboard\.env.production
echo.
echo 🔄 Next steps:
echo   1. Commit and push these changes to GitHub
echo   2. Redeploy your Netlify sites
echo   3. Test the connections
echo.
echo 🌐 Your API base URL is now: %BACKEND_URL%/api
echo.
pause