# Worklets Mismatch: What Happened and How We Fixed It

## 1) The original change we attempted

We wanted the "Computer Science" button on the home screen to navigate to the
`screens/computer-science/home.jsx` screen when pressed. To do that, we added
React Navigation to the project and wired up a stack navigator.

## 2) The first problem this change led to

After adding navigation, the app failed to run because the following module
was missing:

- `@react-navigation/native`

That happened because the navigation packages were not installed yet.

## 3) Why a different error appeared next

After installing dependencies, the app hit this runtime error:

```
[runtime not ready]: WorkletsError: [Worklets] Mismatch between JavaScript part
and native part of Worklets (0.7.1 vs 0.5.1).
```

This error means the JavaScript code in the bundle is using a different
version of the Worklets runtime than the native code bundled inside the
Expo Go app. In other words:

- The JS version (from `node_modules`) and the native version (inside Expo Go)
  were not aligned.
- This mismatch usually happens after dependency installs or upgrades
  involving `react-native-reanimated` or `react-native-worklets`.

Because Expo Go ships its own native binaries, it expects versions that match
the Expo SDK. If the JS side is newer or older, the Worklets runtime refuses
to run.

## 4) How we fixed it

Since we were running in Expo Go, the fix was to install the **Expo-managed**
versions of the worklets-related libraries and clear the Metro cache:

```
npx expo install react-native-reanimated
npx expo install react-native-worklets
npx expo start -c
```

This did two important things:

- `expo install` chose versions compatible with the current Expo SDK.
- `expo start -c` cleared the Metro cache so stale JS bundles were removed.

After that, the Worklets version mismatch went away and the app launched
normally.

## 5) What to remember for next time

- In Expo Go, **always use `npx expo install`** for native dependencies so
  versions match the Expo SDK.
- If you see a Worklets mismatch, it usually means **JS and native versions
  are out of sync**. Reinstalling with Expo-managed versions and clearing the
  cache fixes it.
- If you ever switch to a custom dev client or a native build, you must
  **rebuild the native app** after updating native dependencies.

## 6) The final working state

- Navigation is installed and configured.
- Pressing "Computer Science" navigates to
  `screens/computer-science/home.jsx`.
- The Worklets runtime is now aligned with Expo Go.

