import {  
    Text, 
    Button, 
    Box,
    Stack,
    Flex
} from "@chakra-ui/react"

import { 
    RiUserSearchLine, 
    RiHeart3Line, 
    RiHome7Fill,
} from 'react-icons/ri'
import { BsPersonCircle} from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'

export function Navbar() {
    return (
        <>
        <Flex flexDirection='column' ml={5}>
             <Text 
                textDecorationColor='green'
                fontWeight='bold'
                fontSize='4xl'
                color='green'
                >TerraVerse    
            </Text>
            <Box display='flex' p='2'>
                <Flex>
                    <Stack fontSize={20} spacing='6'>
                    <Button m='2'><RiHome7Fill/> Home</Button>
                    <Button><RiUserSearchLine/>Search</Button>
                    <Button><RiHeart3Line/>Follow</Button>
                    <Button><BsPersonCircle/>Profile</Button> 
                    </Stack> 
                </Flex>
            </Box>

            <Stack align='center' spacing={"60"}>
                <Button 
                m='4'
                border='1px'
                borderRadius={25}
                w='300px' h='50'
                bg='green'
                variant='solid'
                alignSelf='center'
                >
                    <Text fontWeight={"bold"}>Create Post</Text>
                </Button>

                <Stack>
                <Button><BiLogOut/>Logout</Button>
                </Stack>

            </Stack>
       
        </Flex>
        </>
        
    )
}