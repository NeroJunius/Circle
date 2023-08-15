import API from "@/libs/api"
import { useEffect, useState } from "react"
import ThreadCardProps from "../interface/threads";

export function useFetchThread() {
    const [threads, setThreads] = useState<ThreadCardProps[]>([]):

    async function getThreads() {
        try {
            const Response = await API.get("/threads");
            console.log("API data:", Response.data);
            setThreads(Response.data);
        } catch (error) {
            console.error("Getting data failed", error)
        }
    }

    useEffect(() => {
        getThreads();
    }, [])
    return {threads}
           
}