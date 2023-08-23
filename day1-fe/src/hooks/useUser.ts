import { API }from "@/libs/api"
import { useEffect, useState } from "react"
import { IUser } from "@/interface/users";

export function useFetchThread() {
    const [user, setUser] = useState<IUser[]>([]);

    async function getUser() {
        try {
            const Response = await API.get("/user");
            console.log("API data:", Response.data);
            setUser(Response.data);
        } catch (error) {
            console.error("Getting data failed", error)
        }
    }

    useEffect(() => {
        getUser();
        
    }, [])
    
    return {user}
           
}