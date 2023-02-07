import { Button, Center, Flex, Text } from "native-base";

import useAuthStore from "../stores/AuthStore";

export default function HomeScreen() {
  const { session, logout } = useAuthStore();

  return (
    <Flex safeArea>
      <Center h={"full"}>
        <Text>Welcome, {session?.user?.email}</Text>
        <Button onPress={logout}>Logout</Button>
      </Center>
    </Flex>
  );
}
