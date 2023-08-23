import { 
    Button, 
    Text, 
    Image,
    ButtonGroup,
    HStack,
    Container,
    Box,
    Flex,
    Avatar
} from "@chakra-ui/react";
import {useState} from 'react';
import { AiOutlineHeart, AiOutlineMessage} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IThreadCard } from "@/interface/threads";

// func properties //
export  function ThreadCard(props: IThreadCard) {
    const navigate = useNavigate()
    const [showImage, setShowImage] = useState<boolean>(true);
    const [likesCount, setLikedCount] = useState(props.likesCount || 0)
    const [isLiked, setIsLiked] = useState(props.isLiked || false)
    const handleLikeClicked = () => {
        if (isLiked) {
            setLikedCount(likesCount - 1);
          } else {
            setLikedCount(likesCount + 1);
          }
          setIsLiked(!isLiked);
    }

    return (
        <>
        <Container
            maxW='2xl'
            border='1px'
            >
                <Flex textDecoration={"none"}>
                <Box 
                display='flex' 
                flexDirection='row' 
                p='3'>
                    <Box role="user-pict" display='flex'>
                        <Avatar 
                        mt='1'
                        borderRadius='full'
                        boxSize='50px'
                        src={props.picture}/>
                        </Box>
                            
                        <Box role="content" display='flex' flexDirection='column' ml='4'>
                            <Box >
                                <HStack>
                                <Text as="b" fontSize='md'>{props.fullname}</Text>
                                <p>{props.username}</p>
                                <p>{props.posted_at}</p>
                                </HStack>
                            </Box>
                    
                            <Box maxW='md'>
                                <Text textAlign='justify'>{props.content}</Text>
                                {showImage && (
                                <Image  
                                objectFit='fill'
                                src={props.image}
                                onError={() => setShowImage(false)}
                                alt="content-image"
                                />
                                )}
                            </Box>
                    
                            <Flex>  
                                <ButtonGroup variant='solid' spacing='-1'>
                                    <Button 
                                     onClick={handleLikeClicked}
                                     colorScheme={isLiked ? "red" : "gray"}

                                    >
                                    <AiOutlineHeart/>
                                        <Box ml={2}>
                                            {likesCount}
                                        </Box>
                                    </Button>

                                    <Button onClick={() => navigate(`/${props.id}`)}>
                                            <AiOutlineMessage/>
                                            <Box ml={2}>
                                                {props.repliesCount}
                                            </Box>
                                    </Button> 
                                    
                                </ButtonGroup>
                            </Flex> 
                        </Box>        
                    </Box>
                </Flex>
            </Container>
        </>
            
    )
}



