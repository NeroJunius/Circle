import { API }from "@/libs/api"
import { useEffect, useState } from "react"
import { IThreadCard } from "@/interface/threads";
import { useParams } from "react-router-dom";

export function useFetchDetailThread() {
    const {id} = useParams();  // Mengambil parameter "id" dari URL
    const [Threads, setThreads] = useState<IThreadCard>(); // State untuk menyimpan detail thread

     // Fungsi untuk mengambil detail thread dari API
    async function getDetailThreads()  {
        try {
            const Response = await API.get(`/thread/${id}`);
            setThreads(Response.data);  // Menyimpan data thread ke dalam state
        } catch (error) {
            console.error("Getting data failed", error)
        }
    }

    // menggunakan useEffect untuk menjalankan getDetailThreads saat komponen pertama kali dimuat //
    useEffect(() => {
        getDetailThreads();
        
    }, [])
    
    return Threads // Mengembalikan data thread yang telah diambil dari API
}
    
     