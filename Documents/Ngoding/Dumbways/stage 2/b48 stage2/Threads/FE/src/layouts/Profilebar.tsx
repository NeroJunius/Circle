import { Box, GridItem, Image, Text, Avatar, Flex } from '@chakra-ui/react';

const Profilebar = () => {
return (
<GridItem>
           <Box marginRight='3em' border="2px solid grey" borderRadius="30px" boxShadow="1px 2px 8px 2px yellow" paddingBottom="2em" paddingLeft="1.3em" paddingRight="1.3em" mt="3em">
                <Box>
                    <Text fontWeight="bold" color="white" fontSize="26px" mt="0.6em">My Profile</Text>
                    <Image src="https://avatars.mds.yandex.net/i?id=a62ba507174531b46b57a72d1a955e681448e142-9181483-images-thumbs&n=13" marginTop='1em' borderRadius='30' width="600px"/>
                    <Avatar src="https://baxdigital.my.id/wp-content/uploads/2023/07/rino-768x791.png" width='100px' height="100px" border='2px solid black' boxShadow='1px 1px' mt="-4em" marginLeft="1.4em" />
                </Box>
                <Box display="grid">
                    <Text fontWeight="bold" color="white" fontSize="26px">Namaku Jancok</Text>
                    <Text color="grey" fontSize="14px" marginBottom="20px">@Usernameku taek</Text>
                    <Text color="white" fontSize="20px">Deskripsiku bangkeeeee</Text>
                    <Flex justifyContent="space-between" width="50%">
                        <Text color="grey" display="flex"><Text color="white">100</Text>Following</Text>
                        <Text color="grey" display="flex"><Text color="white">200</Text>Follower</Text>
                    </Flex>
                </Box>
            </Box>
        </GridItem>)
}

export default Profilebar