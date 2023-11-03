import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/hookRegister";


export default function FormRegister() {
  const { handleChange, handleRegister } = useRegister();

  const navigate = useNavigate();
  return (
    <>
      <Box m={2} p={2} w={"96"}>
        <Box m={2} p={2}>
          <Box p={2}>
            <Text fontSize={"x-large"} fontWeight={"bold"} color={"green"}>
            C I R C L E
            </Text>
            <Text fontWeight={"bold"}>Create Account C I R C L E</Text>
          </Box>
          <form onSubmit={handleRegister}>
            <FormControl p={2}>
              <Box>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="fullname" onChange={handleChange} />
              </Box>
              <Box>
                <FormLabel>User Name</FormLabel>
                <Input type="text" name="username" onChange={handleChange} />
              </Box>
              <Box>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" onChange={handleChange} />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" onChange={handleChange} />
              </Box>
              <Box mt={2}>
                <Button 
                w={"80"} 
                borderRadius={20} 
                bgColor={"green"} 
                color={"white"} 
                type="submit"
                onClick={handleRegister}
                >
                  Create
                </Button>
              </Box>
              <Flex p={2} gap={2}>
                <Text>Already have account?</Text>
                <Text color={"green"} fontWeight={"bold"} cursor={"pointer"} onClick={() => navigate("/auth/login")}>
                  Login
                </Text>
              </Flex>
            </FormControl>
          </form>
        </Box>
      </Box>
    </>
  );
}