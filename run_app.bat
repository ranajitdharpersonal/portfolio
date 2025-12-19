@echo off
title Portfolio Local Server
echo ==========================================
echo    STARTING RANAJIT PORTFOLIO SERVER
echo ==========================================
echo.
echo [1/2] Checking dependencies...
if not exist node_modules (
    echo node_modules not found. Installing...
    call npm install
) else (
    echo node_modules already exists. Skipping install.
)
echo.
echo [2/2] Starting Next.js Dev Server...
echo Your site will be live at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server.
echo ==========================================
npm run dev
pause