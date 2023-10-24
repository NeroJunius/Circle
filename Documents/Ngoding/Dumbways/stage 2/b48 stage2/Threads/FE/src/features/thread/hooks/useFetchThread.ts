import { useEffect, useState } from "react";
import { IThreadCard } from "../../../interface/thread";
import API from "../../../lib/api";
import { useParams } from "react-router-dom";

export function useFetchThread() {
  const [threads, setThreads] = useState<IThreadCard[]>([]);
  const { id } = useParams<{ id?: string }>();
  const [detailsThread, setDetailThread] = useState<IThreadCard | null>(null);
  

  const [newPostContent, setNewPostContent] = useState({
    content: "",
    image: "",
  });

  async function getThreads() {
    try {
      const response = await API.get("/thread", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      });
      setThreads(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching :", error);
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getDetailThread() {
    if (id) {
      try {
        const response = await API.get(`/thread/${id}`);
        setDetailThread(response.data);
      } catch (error) {
        console.error("Error fetching thread details:", error);
      }
    }
  }

  const handleClickPostSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      
      const formData = new FormData()
      formData.append("content", newPostContent.content)
      formData.append("image", newPostContent.image)
      // setNewPostContent({ content: "", image: "" });
      await API.post("/thread/create", formData);
      getThreads();
    } catch (error) {
      console.log("Error creating content:", error);
    }
  }

  useEffect(() => {
    getThreads();
  }, []);

  useEffect(() => {
    if (id) {
      getDetailThread();
      window.scroll(0, 0);
    }
  }, [id, getDetailThread]);

  return { threads, newPostContent, detailsThread, handleClickPostSubmit, setNewPostContent };
}
