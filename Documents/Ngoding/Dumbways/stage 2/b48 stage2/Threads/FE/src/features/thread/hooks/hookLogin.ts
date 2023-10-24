import { ChangeEvent, useState } from "react";
import API from "../../../lib/api";
import { IUserLogin } from "../../../interface/user";
import { useNavigate } from "react-router-dom";
import { AUTH_LOGIN } from "../../../store/rootReducer";
import { useDispatch } from "react-redux";

export function hooksLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formLogin, setFormLogin] = useState<IUserLogin>({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setFormLogin({
      ...formLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    try {
      const response = await API.post('/auth/login', formLogin);
      // localStorage.setItem("token", response.data.token)
      dispatch (AUTH_LOGIN(response.data))
      console.log("login success!", response);
      navigate("/");
    } catch (error) {
      console.log('cannot login! :', error);
    }
    
  }
  return { handleChange, handleLogin };
}
