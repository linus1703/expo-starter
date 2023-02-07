import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, useToast } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./app/hooks/useCachedResources";
import useColorScheme from "./app/hooks/useColorScheme";
import Navigation from "./app/navigation/RootNavigator";
import { supabase } from "./app/services/supabase";
import { useEffect } from "react";
import useAuthStore from "./app/stores/AuthStore";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const toast = useToast();
  const { setSession, logout } = useAuthStore();

  useEffect(() => {
    supabase.auth
      .refreshSession()
      .then(async (session) => {
        console.log("session", session);
        setSession(session.data.session);
        if (session.error) await logout();
      })
      .catch(async (error) => {
        console.log("error", error);
        await toast.show({
          variant: "left-accent",
          placement: "top",
          title: "Error",
          description: "Please login again",
          bg: "danger.500",
        });
      });
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NativeBaseProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </NativeBaseProvider>
      </SafeAreaProvider>
    );
  }
}
