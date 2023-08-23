import 
{ 
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Text 
} from "@chakra-ui/react";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetchDetailThread } from "@/hooks/useFetchDetailThread";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { ThreadCard } from "./ThreadCard";

export function ThreadDetail() {
  // const {id} = useParams();
  const Threads = useFetchDetailThread();
    
    // isi dari func Fetch
    // const {id} = useParams();
    // const [Threads, setThreads] = useState<IThreadCard>();

    // async function getDetailThreads()  {
    //     try {
    //         const Response = await API.get(`/thread/${id}`);
    //         console.log("API data:", Response.data);
    //         setThreads(Response.data);
    //     } catch (error) {
    //         console.error("Getting data failed", error)
    //     }
    // }

    // useEffect(() => {
    //     getDetailThreads();
        
    // }, [])
    
    // return Threads
    
    const [showImage, setShowImage] = useState<boolean>(true)

  // untuk counting jumlah like //
  //   const [likesCount, setLikedCount] = useState(element.likesCount || 0)
  //   const [isLiked, setIsLiked] = useState(element.isLiked || false)
  //   const handleLikeClicked = () => {
  //     if (isLiked) {
  //         setLikedCount(likesCount - 1);
  //       } else {
  //         setLikedCount(likesCount + 1);
  //       }
  //       setIsLiked(!isLiked);
  // }

    return (  
    <>
      <ThreadCard 
              key={Threads?.id} 
              picture={Threads?.picture} 
              fullname={Threads?.fullname} 
              username={Threads?.username} 
              posted_at={Threads?.posted_at} 
              content={Threads?.content} 
              image={Threads?.image} 
              likesCount={Threads?.likesCount} 
              repliesCount={Threads?.repliesCount}
              isLiked={Threads?.isLiked}
              />
    </>
    ) 
}

    
