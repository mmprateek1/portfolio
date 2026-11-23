@echo off
title M M Prateek Portfolio Launcher
echo ===================================================
echo   Starting M M Prateek Developer Portfolio
echo   Frontend: http://localhost:5173
echo   Backend API: http://localhost:5000
echo ===================================================
echo.

echo [1/2] Launching Backend Server on port 5000...
start "Portfolio Backend Server" cmd /k "cd server && npm run dev"

timeout /t 2 /nobreak > nul

echo [2/2] Launching Frontend Client on port 5173...
start "Portfolio Frontend Client" cmd /k "cd client && npm run dev"

echo.
echo Both servers are starting up!
echo Your browser will be ready at: http://localhost:5173
echo.
pause
