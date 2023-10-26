import { IThreadPost } from "../../../interface/thread";
import { API } from "../../../lib/api";
import { GET_THREADS } from "../../../store/rootReducer";
import { RootState } from "../../../store/types/rootState";
import { ChangeEvent, FormEvent, useEffect, useRef, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

export function useThreads() {
  const dispatch = useDispatch();
  const threads = useSelector((state: RootState) => state.thread);
  const [form, setForm] = useState<IThreadPost>({
    content: "",
    image: "",
  });

  const getThreads = useCallback(async () => {
    try {
      const response = await API.get("/thread");
      dispatch(GET_THREADS(response.data));
    } catch (error) {
      console.log("gagal mengambil data threads: ", error);
    }
  }, [dispatch]);

  async function handlePost(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("content", form.content);
    formData.append("image", form.image as File);
  
    try {
      const response = await API.post("/thread", formData);
      console.log("berhasil menambahkan thread", response);
      
      await getThreads();
    } catch (error) {
      console.log("gagal menambahkan thread: ", error);
    }
  }
  

  useEffect(() => {
    getThreads();
  }, [getThreads]);


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;

    if (files) {
      setForm({
        ...form,
        [name]: files[0],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  return { handleChange, handlePost, fileInputRef, handleButtonClick, threads };
}
