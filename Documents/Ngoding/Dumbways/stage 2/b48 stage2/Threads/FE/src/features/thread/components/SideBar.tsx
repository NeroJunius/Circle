import { Box, Text, Flex, Button, Container } from "@chakra-ui/react";
import { AiTwotoneHome, AiOutlineFileSearch, AiFillHeart } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

export function SideBar() {
  return (
    <>
    <Container mr={5} p={5} w={'sm'}>
      <Box flexDirection='column'>
        <Box textAlign='center'>
        <Box>
          <Text fontSize={45} fontWeight={"bold"} color={"green"}>
            C I R C L E
          </Text>
        </Box>
        <Box>
          <Box ms={6}>
            <Flex gap={2} p={5} alignItems={"center"}>
              <AiTwotoneHome />
              <Link to="/" color="white">Home</Link>
            </Flex>
            <Flex gap={2} p={5} alignItems={"center"}>
              <AiOutlineFileSearch />
              <Link to="/search">Search</Link>
            </Flex>
            <Flex gap={2} p={5} alignItems={"center"}>
              <AiFillHeart />
              <Link to="/follows">Follows</Link>
            </Flex>
            <Flex gap={2} p={5} alignItems={"center"}>
              <FaUserCircle />
              <Link to="/profile"> Profile</Link>
            </Flex>
          </Box>
          <Flex gap={2} p={5} justify='center'>
            <Button w={250} borderRadius={50} backgroundColor={"green"} color={"white"} _hover={{background: 'blue'}}>
              <Link to="/profile">Create Post</Link>
            </Button>
          </Flex>
          
        </Box>
        <Flex m={4} p={5} justify={'center'} flexDirection={"row"}>
           <Box flexDirection={"row"}>
              <IoIosLogOut/>
              <Button onClick={() => localStorage.removeItem('token')}>
                Logout
              </Button>
          </Box> 
        </Flex>
      </Box>
      </Box>
      <Outlet />
    </Container>
    </>
  );
}
export default SideBar;
