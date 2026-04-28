# Expo Boilerplate

Minimal Expo Router starter focused on reusable theming, status bar control, and a lightweight Redux setup you can swap for any backend.

## Quick start
- Install deps: `npm install`
- Run: `npm start` (or `npx expo start`)
- Platform targets: `npm run android`, `npm run ios`, `npm run web`

## What’s included
- Expo Router with auth flow (`app/(auth)/login`) and two tabs (`home`, `profile`)
- Theme system with light/dark/system modes (`contexts/ThemeContext.tsx`)
- Status bar controller and helpers (`contexts/StatusBarContext.tsx`, `hooks/useStatusBarColor.ts`)
- Reusable UI: `CustomButton`, `ThemeToggle`, `StatusBarBackground`
- Redux Toolkit with a mockable auth slice and an example slice
- Typed absolute imports via `@` alias

## Folder structure
```
app/
  _layout.tsx           // root providers
  (auth)/login/         // login screen (index + styles)
  (tabs)/home/          // home tab (index + styles)
  (tabs)/profile/       // profile tab (index + styles)
components/
  CustomButton/
  ThemeToggle/
  StatusBarBackground/
constants/              // Colors, FontSizes
contexts/               // Theme + StatusBar providers
hooks/                  // useAuth, useStatusBarColor, responsive helpers
redux/
  features/
    auth/               // auth slice
    example/            // example slice
  store/                // store setup + hooks
types/                  // shared types
```

## Branding (name & icon)
- Update app name/slug/bundle IDs in `app.config.ts` (`APP_NAME`, `SLUG`, `BUNDLE_ID`).
- Change the app icon by replacing `app.config.ts > icon` path (currently `./assets/images/icon.png`) with your image. Expo recommends a square 1024x1024 PNG.
- Replace the splash and adaptive icons in the same file (`splash.image`, `android.adaptiveIcon.foregroundImage`).

## Theming & colors
- `contexts/ThemeContext.tsx` stores light/dark/system preference (persisted).
- `getThemeColors(isDark)` returns the palette; `getStatusBarColor` picks bar colors.
- Components read the active theme via `useTheme()`; keep new components theme-aware by calling `getThemeColors(isDark)`.

## Status bar
- Wrap screens with `useStatusBarColor({ screen: 'default' | 'surface' | 'primary' | 'transparent' })`.
- `StatusBarBackground` mirrors the bar color into the safe area.

## Components
- `CustomButton`: variants `primary | secondary | outline | ghost`; supports icons and loading.
- `ThemeToggle`: taps to toggle theme; accepts `size` prop.
- Keep new components in their own folder with `index.tsx` + `styles.ts`.

## Routing patterns
- Each screen lives in its own folder with `index.tsx` + `styles.ts`.
- `(auth)` stack for unauthenticated routes; `(tabs)` for main app.
- Update `app/(tabs)/_layout.tsx` to add/remove tabs.

## State management
- Store: `redux/store/store.ts` exposes `useAppDispatch` / `useAppSelector`.
- Auth slice: `redux/features/auth/authSlice.ts` stores `user`, mock login, and persistence.
- Example slice: `redux/features/example/exampleSlice.ts` shows async thunk + reducers.

### Create a new slice
1) `mkdir -p redux/features/<name>` and add `<name>Slice.ts`.
2) Define state, reducers, and async thunks with `createSlice` / `createAsyncThunk`.
3) Add the reducer to `redux/store/store.ts`.
4) Use it with `useAppDispatch` / `useAppSelector`.

### Wiring real auth
- Replace the mock login in `redux/features/auth/authSlice.ts` with your API call.
- Populate `UserProfile` in `types/authTypes.ts` with your shape.
- Call `login({...})` from UI; `logoutUser` clears persisted user.

## Adding screens
1) Create `app/(scope)/screen-name/index.tsx` and `styles.ts` in the same folder.
2) Use `useStatusBarColor` and `useTheme` for consistent theming.
3) Add a tab entry in `app/(tabs)/_layout.tsx` if it should appear in the tab bar.

## Scripts
- `npm start` — launch Expo
- `npm run android` / `npm run ios` / `npm run web`
- `npm run lint` — lint via Expo config
