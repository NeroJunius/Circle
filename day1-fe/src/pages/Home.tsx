import { Navbar } from "@/components/Navbar"
import { Box, Flex, Spacer} from "@chakra-ui/react"
import { ThreadCard } from "@/components"
import { MyProfiles } from "@/components/MyProfile"
import { API } from "@/libs/api"
import { useFetchThread } from "@/hooks/useFetchThreads"

export function Home (){
    
    const threads = useFetchThread();
    // const [_] = useState()

    const resp = API.get("/threads");
    console.log(resp);

    // isi dari Func Fetch //
    // const [threads, setThreads] = useState<ThreadCardProps[]>([]);
    
    // async function getThreads() {
    //     try {
    //         const Response = await API.get("/thread");
    //         console.log("API data:", Response.data);
    //         setThreads(Response.data);
    //     } catch (error) {
    //         console.error("Getting data failed", error)
    //     }
    // }

    // useEffect(() => {
    //     getThreads();
        
    // }, [])
    
    
    return (
        <>
            <Flex >
                <Box p={2} ml={4}>
                    <Navbar/>
                </Box>

                <Spacer/>

                <Box m={3} p={2}>
                {threads.map((item, index) => { return (
                    <ThreadCard 
                        key={index}
                        id={item.id} 
                        picture={item.picture} 
                        fullname={item.fullname} 
                        username={item.username} 
                        posted_at={item.posted_at} 
                        content={item.content} 
                        image={item.image} 
                        likesCount={item.likesCount} 
                        repliesCount={item.repliesCount}
                        isLiked={item.isLiked}/>
                );
                })}
                </Box>
                    
                <Spacer/>

                <Box ml={2}>
                    <MyProfiles/>
                </Box>
            </Flex>
        </>
    )
}




