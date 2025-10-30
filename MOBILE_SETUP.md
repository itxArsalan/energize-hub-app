# FitFlow Mobile Setup Guide

## 🚀 Running on iOS/Android

FitFlow is built with Capacitor for native mobile capabilities. Follow these steps to run it on your device:

### Prerequisites

- Node.js and npm installed
- Git installed
- For iOS: Mac with Xcode installed
- For Android: Android Studio installed

### Setup Steps

1. **Transfer to GitHub**
   - Click "Export to Github" button in Lovable
   - Clone your repository locally:
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Initialize Capacitor** (if not already done)
   ```bash
   npx cap init
   ```

4. **Add Native Platforms**
   
   For iOS:
   ```bash
   npx cap add ios
   npx cap update ios
   ```
   
   For Android:
   ```bash
   npx cap add android
   npx cap update android
   ```

5. **Build the Web App**
   ```bash
   npm run build
   ```

6. **Sync with Native Projects**
   ```bash
   npx cap sync
   ```
   
   **Important**: Run this command every time you pull new changes from GitHub!

7. **Run on Device/Emulator**
   
   For iOS:
   ```bash
   npx cap run ios
   ```
   
   For Android:
   ```bash
   npx cap run android
   ```

## 📱 Native Features

FitFlow uses native device capabilities including:

- **Step Counter**: Uses device pedometer API (needs implementation)
- **Push Notifications**: Workout reminders
- **Biometric Auth**: Fingerprint/Face ID (optional enhancement)
- **Background Sync**: Sync data when app is closed

## 🔄 Development Workflow

1. Make changes in Lovable
2. Pull changes from GitHub: `git pull`
3. Run: `npm install` (if dependencies changed)
4. Run: `npm run build`
5. Run: `npx cap sync`
6. Test on device: `npx cap run ios` or `npx cap run android`

## 🌐 Hot Reload During Development

The current Capacitor configuration points to your Lovable preview URL for hot reload:
```
https://7085cd63-1626-426f-8b98-b0d3d0bb3600.lovableproject.com
```

This means you can see changes immediately without rebuilding!

## 📝 Notes

- Auto-confirm email is enabled for faster testing
- Authentication uses Lovable Cloud (built on Supabase)
- All data is securely stored in the cloud
- Dark mode toggle is implemented in Settings

## 🎨 Design Features

- Electric Blue (#007AFF) primary color
- Inter font family
- Glassmorphism cards
- Smooth animations
- Progress rings and charts
- Modern bottom navigation

## 🆘 Troubleshooting

If you encounter issues:

1. Clean build folders:
   ```bash
   npm run build
   npx cap sync
   ```

2. For iOS, open in Xcode and clean build folder:
   ```bash
   npx cap open ios
   ```

3. For Android, open in Android Studio:
   ```bash
   npx cap open android
   ```

4. Check Capacitor docs: https://capacitorjs.com/docs

Enjoy building with FitFlow! 💪
