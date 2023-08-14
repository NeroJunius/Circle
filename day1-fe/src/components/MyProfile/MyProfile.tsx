import {
    ChakraProvider,  
    Text, 
    Button, 
    Container,
    Image,
    Box,
    Stack
} from "@chakra-ui/react"

import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

export function MyProfiles() {
    return (
        <ChakraProvider>

        <Container id='profie' m={5} border='1px' borderRadius={10}>
        <Text fontSize='20px' fontWeight={"bold"}>MyProfiles</Text>
        <Image
        mb={"-2"}
        border='4px'
        borderRadius={"15"} 
        objectFit="contain"
        src="https://c4.wallpaperflare.com/wallpaper/674/574/530/arknights-rhodes-island-arknights-hd-wallpaper-preview.jpg"/>
        
        <Stack flexDirection={"row"} justifyContent="space-between">
        <Image 
        mt="-10" ml='4'
        border='4px'
        borderRadius='full'
        boxSize={"100px"}
        src="https://cdn.discordapp.com/attachments/967709088542760983/1139144285917282344/-dibbtd.jpg"/>
        <Button 
        m="4" 
        size="sm"
        border='1px'
        borderRadius={25}
        >Edit Profile</Button>
        </Stack>

        <Text fontSize='25px' fontWeight={"bold"}>Dr. Nero002</Text>
        <Text fontSize={"sm"}>@NeroJunius</Text>
        <Text>Working as Fullstack Developer in LandShip</Text>
        <Stack flexDirection={"row"}>
            <Text>350 Following</Text>
            <Text>350 Followers</Text>
        </Stack>
        </Container>

        <Container id="suggestedProfile" m={5} p={2} border='1px' borderRadius={10} >    
            <Text fontSize='20px' fontWeight={"bold"}>Suggested for you</Text>
            <Stack flexDirection={"row"} justifyContent="space-between">
                 <Box id="user-pict" display={"flex"} flexDirection={"row"} >
                    <Image 
                    m='1'
                    borderRadius='full'
                    boxSize='50px'
                    src="https://raw.githubusercontent.com/Aceship/Arknight-Images/main/avatars/char_173_slchan_wwf%231.png"/>
                        
                    <Box id="username" m={1}>
                    <Text fontWeight={"bold"}>Ensia</Text>
                    <Text fontSize={"sm"}>@cliffheart</Text> 
                    </Box>
                </Box>
   
                <Stack id="button">
                    <Button
                    m={1}
                     border='1px'
                     borderRadius={25}
                    >Follow</Button>   
                </Stack> 
            </Stack>

            <Stack flexDirection={"row"} justifyContent="space-between">
                    <Box id="user-pict" display={"flex"} flexDirection={"row"} >
                    <Image 
                     m='1'
                    borderRadius='full'
                    boxSize='50px'
                    src="https://raw.githubusercontent.com/Aceship/Arknight-Images/main/avatars/char_377_gdglow_summer%2312.png"/>
                        
                    <Box id="username" m={"1"} >
                        <Text fontWeight={"bold"}>Pink Catto</Text>
                        <Text fontSize={"sm"}>@goldenglow321</Text> 
                    </Box>
                    </Box>

                   <Stack id="button">
                    <Button
                    m={1}
                    border='1px'
                    borderRadius={25}
                    >Follow</Button>   
                    </Stack> 
            </Stack>
            
        </Container>

        <Container id='footer' display='flex' m={5} border='1px' borderRadius={10} flexDirection='column' >
            <Stack flexDirection='row'>
                <Text fontSize='15px' fontWeight={"bold"}>Developed by Nafiisan N Achmad</Text>
                <Stack spacing={1} direction='row'>
                    <Button size={"sm"}><AiFillGithub/></Button>
                    <Button size={"sm"}><AiFillTwitterCircle/></Button>
                    <Button size={"sm"}><AiFillLinkedin/></Button>
                </Stack>
            </Stack>
            <Box>
            <Text fontSize='15px' fontWeight={"bold"}>Powered by Dumbways Indonesia #1CodingBootcamp</Text>
            </Box>   
        </Container>

        </ChakraProvider>
    )
}