import { Avatar, Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { useFetchThread } from "../hooks/useFetchThread";
// import MyProfile from "./MyProfile";
// import SideBar from "./SideBar";
import { IThreadCard } from "../../../interface/thread";

export function DetailThread(props: IThreadCard) {
  const [like, setLike] = useState(props.likes_count || 0);
  const [isLiked, setIsLike] = useState(props.is_liked || false);
  const [showImage, setShowImage] = useState(true);
  const { detailsThread } = useFetchThread();

  const handleLikeClick = () => {
    if (isLiked) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setIsLike(!isLiked);
  };
  return detailsThread ? (
    <>
      <Grid templateColumns="repeat(3, 1fr)">
        {/* <SideBar /> */}
        <Box ml={-20} mt={"1em"}>
          <Box
            m={2}
            p={2}
            w={500}
            border="1px solid grey"
            paddingRight={"1em"}
            paddingLeft={"1em"}
            paddingTop={"1em"}
            borderRadius={"13px"}
          >
            <Flex gap={3}>
              <Avatar src={detailsThread.user?.picture} />
              <Box>
                <Flex gap={2}>
                  <Text>{detailsThread.user?.fullname}</Text>
                  <Text color={"gray"}>@{detailsThread.user?.username}</Text>
                  <p>.{detailsThread.posted_at}</p>
                </Flex>
                <Box py={2}>
                  <Text>{detailsThread.content}</Text>
                  <Image
                    w={450}
                    h={250}
                    objectFit="cover"
                    borderRadius={10}
                    src={detailsThread.image}
                  />
                </Box>
                <Flex gap={"20"} ml="5">
                  <Button
                    border="1px solid black"
                    gap={2}
                    colorScheme={isLiked ? "green" : "gray"}
                  >
                    <AiFillLike /> {like} Likes
                  </Button>
                  <Button
                    border="1px solid black"
                    gap={2}
                  >
                    <BiSolidCommentDetail />
                    {} Replies
                  </Button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
        {/* <MyProfile /> */}
      </Grid>
    </>
  ) : (
    <h1>tidak ada</h1>
  );
}
export default DetailThread;
