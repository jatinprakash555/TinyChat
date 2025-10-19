# 🚀 QUICK DEPLOY - TinyChat

## Immediate Steps to Deploy

### 1. Create PNG Assets (2 minutes)
Go to these URLs and save as PNG files in your `assets/` folder:

**Right-click → Save Image As:**
- https://via.placeholder.com/1024x1024/0066CC/FFFFFF?text=TC → Save as `assets/icon.png`
- https://via.placeholder.com/1284x2778/0066CC/FFFFFF?text=TinyChat → Save as `assets/splash.png`  
- https://via.placeholder.com/1024x1024/0066CC/FFFFFF?text=TC → Save as `assets/adaptive-icon.png`
- https://via.placeholder.com/48x48/0066CC/FFFFFF?text=T → Save as `assets/favicon.png`

### 2. Install Dependencies
```bash
npm install
```

### 3. Deploy Now
```bash
npx eas build --profile development --platform android
```

## That's It!
Your app will build successfully. Update logos later in v2.

## Alternative: Use Any PNG Files
Just rename any 4 PNG files you have to:
- `icon.png`
- `splash.png` 
- `adaptive-icon.png`
- `favicon.png`

Put them in `assets/` folder and deploy!