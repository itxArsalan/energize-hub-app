import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.7085cd631626426f8b98b0d3d0bb3600',
  appName: 'FitFlow',
  webDir: 'dist',
  server: {
    url: 'https://7085cd63-1626-426f-8b98-b0d3d0bb3600.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#007AFF',
      showSpinner: false,
    }
  }
};

export default config;
