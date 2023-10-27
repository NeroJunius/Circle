import {
  Box,
  Text,
  Flex,
  Button,
  Container,
  ModalOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React from "react";
import {
  AiTwotoneHome,
  AiOutlineFileSearch,
  AiFillHeart,
} from "react-icons/ai";
import { BiSolidImageAdd } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useThreads } from "..";

export function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
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
                  <Modal
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalCloseButton />
                      <ModalBody>
                        <Box>
                          <Text
                            fontWeight={"bold"}
                            fontSize={20}
                            py={4}
                            color={"green"}
                          >
                            Update Status
                          </Text>
                        </Box>
                        <form
                          method="POST"
                          onSubmit={handlePost}
                          encType="multipart/form-data"
                        >
                          <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            <Input
                              placeholder="What's up today?"
                              name="content"
                              onChange={handleChange}
                              border="1px solid grey"
                            />
                            <Button
                              variant={"ghost"}
                              color={"brand.green"}
                              onClick={handleButtonClick}
                              border="1px solid grey"
                              marginLeft="5px"
                              mr="5px"
                            >
                              <BiSolidImageAdd
                                style={{
                                  height: "50px",
                                  width: "50px",
                                }}
                              />
                            </Button>
                            <Input
                              type="file"
                              name="image"
                              onChange={handleChange}
                              style={{ display: "none" }}
                              ref={fileInputRef}
                            />
                          </Box>
                          <ModalFooter>
                            <Button
                              onClick={onClose}
                              type="submit"
                              backgroundColor={"green"}
                              color={"white"}
                              colorScheme="green"
                              variant="ghost"
                            >
                              Post!
                            </Button>
                          </ModalFooter>
                        </form>
                      </ModalBody>
                    </ModalContent>
                  </Modal>
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
