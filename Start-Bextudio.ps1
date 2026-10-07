$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    throw 'Install Node.js 22.13 or newer before starting Bextudio.'
}
if (-not (Test-Path -LiteralPath (Join-Path $PSScriptRoot 'dist/index.html'))) {
    Write-Host 'Build the website first: npm ci, then npm run build.'
    exit 1
}
Write-Host 'Website: http://127.0.0.1:5174'
Write-Host 'Admin: http://127.0.0.1:5174/admin'
Write-Host 'Press Ctrl+C to stop.'
& node --env-file-if-exists=.env server/index.mjs
