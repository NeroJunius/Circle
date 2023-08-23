import { API }from "@/libs/api"
import { useEffect, useState } from "react"
import {IThreadCard} from "@/interface/threads";

export function useFetchThread() {
    const [Threads, setThreads] = useState<IThreadCard[]>([]);

    async function getThreads() {
        try {
            const Response = await API.get("/thread");
            console.log("API data:", Response.data);
            setThreads(Response.data);
        } catch (error) {
            console.error("Getting data failed", error)
        }
    }

    useEffect(() => {
        getThreads();
        
    }, [])
    
    return Threads
           
}