# Expo Commands Cheatsheet

## Development Commands

### Start Development Server
```bash
npx expo start
# or
expo start
```
- Starts the development server
- Opens Expo DevTools in browser
- Shows QR code for mobile testing

### Platform-Specific Development
```bash
npx expo start --web          # Start web development server
npx expo start --ios          # Start iOS simulator
npx expo start --android      # Start Android emulator
npx expo start --tunnel       # Use tunnel connection (for testing on different networks)
npx expo start --offline      # Start in offline mode
npx expo start --clear        # Clear cache and start
```

## Running on Different Platforms

### Web
```bash
npx expo start --web
# or
npx expo export:web           # Build for web production
```

### Mobile (Expo Go App)
1. Run `npx expo start`
2. Scan QR code with Expo Go app (iOS/Android)
3. Or press `i` for iOS simulator, `a` for Android emulator

### iOS Simulator
```bash
npx expo start --ios
# or press 'i' in the terminal after running expo start
```

### Android Emulator
```bash
npx expo start --android
# or press 'a' in the terminal after running expo start
```

## Building Commands

### Development Builds
```bash
npx expo install --fix        # Fix package versions for Expo SDK
npx expo prebuild             # Generate native code (for bare workflow)
```

### Production Builds (EAS Build)
```bash
npx eas build --platform ios
npx eas build --platform android
npx eas build --platform all
```

### Web Production Build
```bash
npx expo export:web           # Export web build
npx expo build:web            # Legacy web build command
```

## Project Management

### Create New Project
```bash
npx create-expo-app MyApp
npx create-expo-app MyApp --template blank-typescript
```

### Install Dependencies
```bash
npx expo install package-name    # Install Expo-compatible version
npx expo install --fix           # Fix all package versions
```

### SDK and Updates
```bash
npx expo upgrade              # Upgrade Expo SDK
npx expo doctor               # Check project health
```

## Useful Development Shortcuts

When development server is running, press:
- `w` - Open in web browser
- `i` - Open in iOS simulator
- `a` - Open in Android emulator
- `m` - Toggle menu
- `r` - Reload app
- `s` - Switch to Expo Go
- `c` - Clear cache and reload
- `d` - Open developer menu
- `?` - Show all commands

## Configuration Files

- `app.json` or `app.config.js` - Main Expo configuration
- `eas.json` - EAS Build configuration
- `metro.config.js` - Metro bundler configuration

## Common Workflows

### Quick Start Development
1. `npx expo start`
2. Press `w` for web or scan QR for mobile

### Mobile Testing
1. Install Expo Go app on your phone
2. `npx expo start`
3. Scan QR code with camera (iOS) or Expo Go (Android)

### Production Build
1. `npx eas build --platform all`
2. Wait for builds to complete
3. Download from build dashboard