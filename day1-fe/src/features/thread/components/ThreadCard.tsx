import { 
    Button, 
    Text, 
    Image,
    ButtonGroup,
    HStack,
    Container,
    Box,
    Flex
} from "@chakra-ui/react";
import {useState} from 'react';
import { AiOutlineHeart, AiOutlineMessage} from "react-icons/ai";

// mirip struct //
interface ThreadCard {
    author_pict?: string,
    author_full_name?:string,
    author_username?:string,
    posted_at?:string,
    content?:string,
    image?:string,
    likes_count?:number,
    replies_count?:number,
    is_liked?:boolean
}

// func properties //
export  function ThreadCard(props: ThreadCard) {
    const [showImage, setShowImage] = 
    useState<boolean>(true);
    return (
            <Container
            display='flex'
            maxW='2xl'
            border='1px'
            >
            <Box display='flex' flexDirection='row' p='3'>
                <Box role="user-pict" display='flex'>
                    <Image mt='1'
                            borderRadius='full'
                            boxSize='50px'
                            src={props.author_pict}/>
                </Box>

                <Box role="content" display='flex' flexDirection='column' ml='4'>
                   <Box >
                        <HStack>
                        <Text as="b" fontSize='md'>{props.author_full_name}</Text>
                        <p>{props.author_username}</p>
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
                        <ButtonGroup variant='outline' spacing='6'>
                            <Button style={props.is_liked == true ? {color:"red"} : {color:"grey"}}>
                            <AiOutlineHeart/>{props.likes_count}
                            </Button>
                            <Button><AiOutlineMessage/>{props.replies_count}</Button>
                        </ButtonGroup>
                    </Flex> 
                </Box>        
            </Box>

            </Container>
    )
}



