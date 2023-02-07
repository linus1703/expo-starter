import { StatusBar } from "expo-status-bar";
import { Center, Flex, Text } from "native-base";
import { Platform } from "react-native";

export default function ModalScreen() {
  return (
    <Flex safeArea>
      <Center h={"full"}>
        <Text>Modal</Text>
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      </Center>
    </Flex>
  );
}
