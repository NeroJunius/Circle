import { Box, Input, Text } from "@chakra-ui/react";
import MyProfile from "./MyProfile";
import SideBar from "./SideBar";

export function SearchPage() {
  return (
    <>
      <SideBar />
      <Box>
        <Text>Search</Text>
        <Input placeholder="Search" />
      </Box>
      <MyProfile />
    </>
  );
}

export default SearchPage;
