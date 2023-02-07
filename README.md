# Expo-starter 
Start FAST with Expo + Supabase + NativeBase + Zustand.

## Features

- Expo SDK `47`
- [Supabase](https://github.com/supabase/supabase) 
- [Zustand](https://github.com/pmndrs/zustand)
- [NativeBase](https://github.com/GeekyAnts/NativeBase)
- [React Navigation](https://github.com/react-navigation/react-navigation)
- Auth flow (Login, Register, Session management)

## Installation

1. Clone this project

```bash
git clone https://github.com/linus1703/expo-starter
```
2. Change into the directory and install the dependencies

```bash
cd expo-starter

yarn install
```

3. Update `/app/config/config.base.ts` with your own configuration, e.g.:

```shell
# Replace XXXX's with your own Supabase keys
SUPABASE_URL: "XXXX",
SUPABASE_ANON_KEY: "XXXX",
```

4. Start the project:

- `yarn start`

## File Structure

```shell
Expo Starter/
├─ app/
│  ├─ components/
│  ├─ config/
│  ├─ constants/
│  ├─ hooks/
│  ├─ navigation/
│  ├─ screens/
│  ├─ services/
│  ├─ stores/
├─ assets/
│  ├─ fonts/
│  ├─ images/
App.tsx

```

## Screens

Main screens:

- Login
- Signup
- Home (Bare Minimum) with a logout button

![Login screen](https://i.imgur.com/ynyvDe5.png)

![Signup screen](https://i.imgur.com/ZtWEpnx.png)
