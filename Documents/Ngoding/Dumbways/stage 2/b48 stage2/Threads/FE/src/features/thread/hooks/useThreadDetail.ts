import { IReplyPost } from "../../../interface/reply";
import { IThreadCard } from "../../../interface/thread";
import API from "../../../lib/api";
import { ChangeEvent, FormEvent, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

export function useThreadDetail() {
  const [replies, setReplies] = useState<IThreadCard[]>();
  const [thread, setThread] = useState<IThreadCard>();
  const { id } = useParams();

  const [form, setForm] = useState<IReplyPost>({
    content: "",
    thread_id: +(id as string),
  });

  async function handlePost(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();

      const response = await API.post("/reply", form);
      console.log("berhasil menambahkan reply", response.data);
      getReplies();
    } catch (err) {
      console.log("gagal menambahkan reply", err);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const getReplies = useCallback(async () => {
    try {
      const response = await API.get(`/replies?thread_id=${id}`);
      setReplies(response.data);
      console.log("ini reply untuk thread id", response.data);
    } catch (err) {
      console.log("gagal mengambil replies data thread by id : ", err);
    }
  }, [id]);

  useEffect(() => {
    async function getThreadById() {
      try {
        const response = await API.get(`/thread/${id}`);
        setThread(response.data);
        console.log("ini data thread detail", response.data);
      } catch (err) {
        console.log("gagal mengambil data thread by id : ", err);
      }
    }

    getThreadById();
    getReplies();
  }, [getReplies, id]);

  return {
    replies,
    thread,
    form,
    handleChange,
    handlePost,
  };
}
