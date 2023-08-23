import { 
    Flex,
    Text, 
    Button, 
    Container,
    Image,
    Box,
    Stack,
    Avatar
} from "@chakra-ui/react"
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

export function MyProfiles() {
    return (
        <>
        <Container>
            
            <Flex 
            id='profie'
            flexDirection={'column'} 
            m={5} p={5}
            border='1px' 
            borderRadius={10}
            >
                <Text mb={3} fontSize='20px' fontWeight={"bold"}>MyProfiles</Text>
                <Image
                mb={"-5"}
                border='4px'
                borderRadius={"15"} 
                objectFit="contain"
                src="https://c4.wallpaperflare.com/wallpaper/674/574/530/arknights-rhodes-island-arknights-hd-wallpaper-preview.jpg"/>
                
                <Stack flexDirection={"row"} justifyContent="space-between">
                <Avatar 
                mt="-10" ml='4'
                border='4px'
                borderRadius='full'
                boxSize={"100px"}
                src="https://cdn.discordapp.com/attachments/967709088542760983/1139144285917282344/-dibbtd.jpg"/>
                <Button 
                m="6" 
                size="sm"
                border='1px'
                borderRadius={25}
                >Edit Profile</Button>
                </Stack>

                <Text fontSize='25px' fontWeight={"bold"}>Dr. Nero002</Text>
                <Text fontSize={"md"}>@NeroJunius</Text>
                <Text>Working as Fullstack Developer in LandShip</Text>
                <Stack flexDirection={"row"}>
                    <Text>
                        <Link to={"#"}>350 Following</Link>
                    </Text>
                    <Text>
                    <Link to={"#"}>350 Follower</Link>
                    </Text>
                </Stack>
            </Flex>

            <Flex 
            id="suggestedProfile" 
            m={5} p={4}
            flexDirection={'column'} 
            border='1px' 
            borderRadius={10} >    
                <Text mb={3} fontSize='20px' fontWeight={"bold"}>Suggested for you</Text>
                <Stack flexDirection={"row"} justifyContent="space-between">
                    <Box id="user-pict" display={"flex"} flexDirection={"row"} >
                        <Avatar
                        m='1'
                        boxSize='50px'
                        src="https://raw.githubusercontent.com/Aceship/Arknight-Images/main/avatars/char_173_slchan_wwf%231.png"/>
                            
                        <Box id="username" m={1}>
                        <Text fontSize={"md"} fontWeight={"bold"}>Ensia</Text>
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
                        <Avatar 
                        m='1'
                        boxSize='50px'
                        src="https://raw.githubusercontent.com/Aceship/Arknight-Images/main/avatars/char_377_gdglow_summer%2312.png"/>
                            
                        <Box id="username" m={"1"} >
                            <Text fontSize={"md"} fontWeight={"bold"}>Pink Catto</Text>
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
            </Flex>

            <Flex 
            id='footer' 
            m={5} p={4}
            border='1px' 
            borderRadius={10} 
            flexDirection='column' >
                <Stack flexDirection='row'>
                    <Text fontSize='15px' fontWeight={"bold"}>Developed by Nafiisan N Achmad</Text>
                    <Stack spacing={1} direction='row'>

                        <Link 
                        to={"https://github.com/NeroJunius"}
                        style={{ color: "black", fontSize:"25px"}}
                        >
                            <AiFillGithub/>
                        </Link>
                        
                        <Link 
                        to={"https://twitter.com/NeroAchmad?t=XOaQ-DKfJdp2HCT58iv8xw&s=09"}
                        style={{ color: "black", fontSize:"25px"}}
                        >
                            <AiFillTwitterCircle/>  
                        </Link>
                        
                        <Link 
                        to={""}
                        style={{ color: "black", fontSize:"25px"}}
                        >
                            <AiFillLinkedin/>
                        </Link>
                        
                    </Stack>
                </Stack>
                <Box>
                <Text fontSize='15px' fontWeight={"bold"}>Powered by Dumbways Indonesia #1CodingBootcamp</Text>
                </Box>   
            </Flex>

        </Container>
        </>
    )
}