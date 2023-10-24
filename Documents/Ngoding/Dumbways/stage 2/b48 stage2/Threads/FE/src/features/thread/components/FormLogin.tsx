import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { hooksLogin } from "../hooks/hookLogin";

export default function FormLogin() {
  const { handleChange, handleLogin } = hooksLogin();
  const navigate = useNavigate();
  return (
    <>
      <Box m={2} p={2} w={"96"}>
        <Box p={2}>
          <Text
            fontSize={"x-large"}
            fontWeight={"bold"}
            color={"green"}
            textAlign={"center"}
          >
            C I R C L E
          </Text>
          <Text fontWeight={"bold"}>Login</Text>
        </Box>
        <FormControl p={2}>
          <Box>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" onChange={handleChange} />
          </Box>
          <Box>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" onChange={handleChange} />
          </Box>
          <Grid templateColumns="repeat(4, 1fr)" gap={2} p={2}>
            <GridItem colSpan={2} />
            <GridItem colStart={7} colEnd={6}>
              <Text onClick={() => navigate("/lupapassword")}>
                Forgot Password?
              </Text>
            </GridItem>
          </Grid>
          <Box mt={2}>
            <Button
              w={"80"}
              borderRadius={20}
              bgColor={"green"}
              color={"white"}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          <Flex p={1} gap={2}>
            <Text>Don't have an account yet?</Text>
            <Text
              color={"green"}
              fontWeight={"bold"}
              cursor={"pointer"}
              onClick={() => navigate("/auth/register")}
            >
              Create Accont
            </Text>
          </Flex>
        </FormControl>
      </Box>
    </>
  );
}
