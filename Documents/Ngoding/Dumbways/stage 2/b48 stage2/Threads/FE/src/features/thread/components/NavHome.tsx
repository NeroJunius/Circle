import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { useThreads } from "../hooks/useThreads";

export function NavHome() {
  const { handleChange, handlePost, fileInputRef, handleButtonClick } =
    useThreads();

  // responsive layout//
  const [isSmallerThan600] = useMediaQuery("(max-width: 599px)");

  return (
    <>
      <Container bg="dark" maxW="2xl">
        <Flex
          w={isSmallerThan600 ? "sm" : "md"}
          flexDirection={"column"}
          border="1px gray"
          p={5}
        >
          <Box>
            <Text fontWeight={"bold"} fontSize={20} py={4} color={"green"}>
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
              <Button
                type="submit"
                backgroundColor={"green"}
                color={"white"}
                colorScheme="green"
                fontSize={"18"}
                width={"16%"}
              >
                Post
              </Button>
            </Box>
          </form>
        </Flex>
      </Container>
    </>
  );
}
export default NavHome;
