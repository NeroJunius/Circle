import {ThreadCard} from "@/features/thread"
import ThreadDummy from '../../../utils/fake_data/ThreadDummy.json'
import {useState} from 'react'
import { Navbar } from "@/components/Navbar/Navbar"
import { MyProfiles } from "@/components/MyProfile/MyProfile"
import { Grid, GridItem} from "@chakra-ui/react"
import { API } from "@/libs/api"


const Home = () => {
    const [Thread, _] = useState(ThreadDummy)
    
    const resp = API.get("/thread");
    console.log(resp);
    return (
        <>
        <Grid
        templateAreas={`"nav main myprofile"`}
        gap='4'
        >
            <GridItem pl='2' area={'nav'}>
                <Navbar/>
            </GridItem>

            <GridItem pl='2' area={'main'}>
            {Thread.map((item, index) => 
            (
            <ThreadCard key={index} author_pict={item.author_pict} author_full_name={item.author_full_name} author_username={item.author_username} 
            posted_at={item.posted_at} content={item.content} image={item.image} likes_count={item.likes_count} replies_count={item.replies_count}
            is_liked={item.is_liked}/>
            ))}
            </GridItem>

            <GridItem pl='2' area={'myprofile'}>
            <MyProfiles/>
            </GridItem>

        </Grid>
        </>
    )
}

export default Home;