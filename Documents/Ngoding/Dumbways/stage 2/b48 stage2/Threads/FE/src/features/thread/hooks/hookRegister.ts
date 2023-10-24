import { ChangeEvent, useState } from "react";
import { API } from "../../../lib/api";
import { IUserRegister } from "../../../interface/user";
import { useNavigate } from "react-router-dom";

export function useRegister() {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState<IUserRegister>({
    email: "",
    username: "",
    fullname: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormRegister({
      ...formRegister,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    try {
      const response = await API.post('/auth/register', formRegister);
      console.log("data Register", response);
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  }
  return { handleChange, handleRegister };
}