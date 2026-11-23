Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Starting M M Prateek Developer Portfolio" -ForegroundColor Green
Write-Host "  Frontend:    http://localhost:5173" -ForegroundColor Yellow
Write-Host "  Backend API: http://localhost:5000" -ForegroundColor Yellow
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "[1/2] Launching Backend Server on port 5000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$PSScriptRoot/server'; npm run dev"

Start-Sleep -Seconds 2

Write-Host "[2/2] Launching Frontend Client on port 5173..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$PSScriptRoot/client'; npm run dev"

Write-Host ""
Write-Host "Both servers launched in their own windows!" -ForegroundColor Green
Write-Host "Open your browser at: http://localhost:5173" -ForegroundColor Yellow
