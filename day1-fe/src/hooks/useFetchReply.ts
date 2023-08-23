import { API }from "@/libs/api"
import { useEffect, useState } from "react"
import { Reply } from "@/interface/reply";
import { useParams } from "react-router-dom";

export function useFetchReply() {
    const {id} = useParams();
    const [Threads, setThreads] = useState<Reply>();

    async function getReply()  {
        try {
            const Response = await API.get(`/reply?thread-id${id}`);
            console.log("API data:", Response.data);
            setThreads(Response.data);
        } catch (error) {
            console.error("Getting data failed", error)
        }
    }

    useEffect(() => {
        getReply();
        
    }, [])
    
    return Threads
}
    
     