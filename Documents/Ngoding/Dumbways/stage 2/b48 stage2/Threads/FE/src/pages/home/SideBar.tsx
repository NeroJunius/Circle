import {
  Box,
  Text,
  Flex,
  Button,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AiTwotoneHome,
  AiOutlineFileSearch,
  AiFillHeart,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useThreads } from "../../features/thread/hooks/useThreads";
import CreatePostModal from "../../features/thread/modals/PostThreadModal";

export function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleChange, handlePost, fileInputRef, handleButtonClick } =
    useThreads();
  return (
    <>
      <Container mr={5} p={5} w={"sm"}>
        <Box flexDirection="column">
          <Box textAlign="center">
            <Box>
              <Text fontSize={45} fontWeight={"bold"} color={"green"}>
                C I R C L E
              </Text>
            </Box>
            <Box>
              <Box ms={6}>
                <Flex gap={2} p={5} alignItems={"center"}>
                  <AiTwotoneHome />
                  <Link to="/" color="white">
                    Home
                  </Link>
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
                  <Link to={"/profile"}> Profile</Link>
                </Flex>
              </Box>
              <Flex gap={2} p={5} justify="center">
                <Button
                  w={250}
                  borderRadius={50}
                  backgroundColor={"green"}
                  color={"white"}
                  _hover={{ background: "blue" }}
                >
                  <Text onClick={onOpen}>Create Post</Text>
                  <CreatePostModal
                    isOpen={isOpen}
                    onClose={onClose}
                    handleChange={handleChange}
                    handlePost={handlePost}
                    handleButtonClick={handleButtonClick}
                    fileInputRef={fileInputRef}
                  />
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default SideBar;
