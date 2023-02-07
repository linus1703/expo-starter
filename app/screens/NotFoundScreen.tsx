import { Center, Flex, Text } from "native-base";
import { TouchableOpacity } from "react-native";

import { RootStackScreenProps } from "../../types";

export default function NotFoundScreen({
  navigation,
}: RootStackScreenProps<"NotFound">) {
  return (
    <Flex safeArea>
      <Center h={"full"}>
        <Text>This screen doesn't exist.</Text>
        <TouchableOpacity onPress={() => navigation.replace("App")}>
          <Text>Go to home screen!</Text>
        </TouchableOpacity>
      </Center>
    </Flex>
  );
}
