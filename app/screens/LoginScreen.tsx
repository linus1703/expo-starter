import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  useTheme,
  useToast,
  VStack,
} from "native-base";
import { AuthStackScreenProps } from "../../types";
import { useState } from "react";
import useAuthStore from "../stores/AuthStore";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthError } from "@supabase/supabase-js";

export default function LoginScreen({
  navigation,
}: AuthStackScreenProps<"Login">) {
  const { login } = useAuthStore();
  const [email, setEmail] = useState("dev@dev.de");
  const [password, setPassword] = useState("dev123");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const onClickSignin = async () => {
    setLoading(true);
    login(email, password)
      .then((user) => {
        console.log("Login successful", user);
      })
      .catch((error: AuthError) => {
        console.log("Login failed", error);
        toast.show({
          variant: "left-accent",
          placement: "top",
          title: "Login failed",
          description: error.message,
          bg: "danger.500",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Flex safeArea>
      <Center h={"full"}>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                value={email}
                onChangeText={setEmail}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="mail" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                value={password}
                onChangeText={setPassword}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="lock" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
              />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "indigo.500",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forget Password?
              </Link>
            </FormControl>
            <Button
              mt="2"
              colorScheme="indigo"
              onPress={() => onClickSignin()}
              leftIcon={
                <Icon as={<MaterialIcons name="login" />} size={5} ml="2" />
              }
              isLoading={loading}
            >
              Sign in
            </Button>
            <HStack mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                I'm a new user.{" "}
              </Text>
              <Link
                _text={{
                  color: "indigo.500",
                  fontWeight: "medium",
                  fontSize: "sm",
                }}
                onPress={() => navigation.navigate("Register")}
              >
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Flex>
  );
}
