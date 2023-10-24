import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IThreadCard } from "../../../interface/thread";
import { GET_THREADS } from "../../../store/rootReducer";
import { RootState } from "../../../store/types/rootState";
import API from "../../../lib/api";


export function useThreadCard() {
    const [showImage, setShowImage] = useState<boolean>(true);
    const dispatch = useDispatch();
    const threads = useSelector((state: RootState) => state.thread);

    function updateThreadsWithLike (
        thread_id: number | undefined,
        threads: IThreadCard[]
    ) {
        return new Promise((resolve, reject) => {
            const updatedthreads: IThreadCard[] = [];

            threads.forEach((thread) => {
                let likes_count = thread.likes_count ?? 0;

                if (thread.is_liked) {
                    likes_count = likes_count - 1;
                } else {
                    likes_count = likes_count + 1;
                }

                if (thread.id === thread_id) {
                    updatedthreads.push({
                        ...thread,
                        is_liked: !thread.is_liked,
                        likes_count: likes_count,
                    });
                } else {
                    updatedthreads.push(thread);
                }

                if (updatedthreads.length === 0) {
                    reject(new Error("thread data blank"));
                }

                resolve(updatedthreads);
            });
        });
    }

    async function handlepostlike (
        thread_id: number | undefined,
        is_liked: boolean | undefined
    ) {
        try {
            if (!is_liked) {
                const response = await API.post("/like", { thread_id: thread_id });
                console.log("handlepostlike !is_liked function: ", response.data);
            } else {
                const response = await API.delete(`/like/${thread_id}`);
                console.log('berhasil delete like: ', response.data)
            }
            const newthreads = await updateThreadsWithLike(thread_id, threads);
            dispatch(GET_THREADS(newthreads));
        } catch (error) {
            console.log('update like gagal', error);
        }
    }

    return {
        showImage, setShowImage, handlepostlike
    };
}