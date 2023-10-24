import 
{ 
  Box, 
  Container, 
  Flex, 
  Collapse, 
  useMediaQuery, 
  VStack
} from "@chakra-ui/react";

import { ThreadCard } from "../features/thread";
import MyProfile from "../features/thread/components/MyProfile";
import NavHome from "../features/thread/components/NavHome";
import SideBar from "../features/thread/components/SideBar";
import { useFetchThread } from "../features/thread/hooks/useFetchThread";

const Home = () => {
  const { threads } = useFetchThread();

  // responsive layout //
  const [isSmallerThan900] = useMediaQuery("(max-width: 899px)");
  const [isSmallerThan600] = useMediaQuery("(max-width: 599px)");

  return (
    <>
      <Container display="flex" centerContent>
        <Flex>
          <Collapse in={!isSmallerThan900}>
            <Box position="fixed" top={0} left={0}>
              <SideBar />
            </Box>
          </Collapse>

            <VStack m={isSmallerThan600 ? 0 : 3}>
            <Box position="sticky" top={0} zIndex={"100"}>
              <NavHome/>
            </Box>
            
            <Box> 
              {threads.map((dummy, index) => (
              <ThreadCard
                key={index}
                id={dummy.id}
                user={dummy.user}
                posted_at={dummy.posted_at}
                content={dummy.content}
                image={dummy.image}
                likes_count={dummy.likes_count}
                replies_count={dummy.replies_count}
              />
            ))}
          </Box>
          </VStack>
          
          <Collapse in={!isSmallerThan900}>
            <Box  position="fixed" top={0} right={0} p={4}>
              <MyProfile />
            </Box>
          </Collapse>
        </Flex>
      </Container>
    </>
  );
};

export default Home;
