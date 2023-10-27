import {
  Avatar,
  Box,
  Container,
  Flex,
  Image,
  Text,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiSolidCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { IThreadCard } from "../../../interface/thread";

export function ThreadCard(props: IThreadCard) {
  const [like, setLike] = useState(props.likes_count || 0);
  const [isLiked, setIsLike] = useState(props.is_liked || false);
  const [showImage, setShowImage] = useState(true);

  const handleLikeClick = () => {
    if (isLiked) {
      setLike(like - 1);
    } else {
      setLike(like + 1);
    }
    setIsLike(!isLiked);
  };

  // responsive layout//
  const [isSmallerThan600] = useMediaQuery("(max-width: 599px)");

  return (
    <Container>
      <Flex
        w={isSmallerThan600 ? "sm" : "md"}
        flexDirection={"column"}
        m={5}
        p={5}
      >
        <Box gap={1} p="3" display="flex" flexDirection="row">
          <Avatar src={props.user?.picture} />
          <Box>
            <Flex gap={2}>
              <Text>{props.user?.fullname}</Text>
              <Text color="gray">@{props.user?.username}</Text>
              <Text color="gray">
                {props.posted_at
                  ? new Date(props.posted_at).toLocaleDateString()
                  : ""}
              </Text>
            </Flex>
            <Box py={2}>
              <Text>{props.content}</Text>
              {showImage && (
                <Image
                  w={450}
                  h={250}
                  objectFit="cover"
                  borderRadius={10}
                  src={props.image}
                  onError={() => setShowImage(false)}
                />
              )}
            </Box>
            <Flex justifyContent="space-around">
              <Button
                gap={2}
                onClick={handleLikeClick}
                colorScheme={isLiked ? "green" : "gray"}
              >
                <AiFillLike /> {like} likes
              </Button>
              <Link to={`/detail/${props.id}`}>
                <Button gap={2}>
                  <BiSolidCommentDetail />
                  {props.replies_count} replies
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default ThreadCard;
