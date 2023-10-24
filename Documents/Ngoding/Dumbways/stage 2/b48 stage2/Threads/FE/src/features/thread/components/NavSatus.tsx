import { Box, Flex, Text } from "@chakra-ui/react";
import { VscArrowLeft } from "react-icons/vsc";
import { Link } from "react-router-dom";

export function NavStatus() {
  return (
    <>
      <Box>
        <Box m={2} p={2}>
          <Link to={"/"}>
            <Flex align={"center"} gap={3}>
              <VscArrowLeft size={25} />
              <Text fontSize={20}>Status</Text>
            </Flex>
          </Link>
        </Box>
      </Box>
    </>
  );
}
export default NavStatus;
