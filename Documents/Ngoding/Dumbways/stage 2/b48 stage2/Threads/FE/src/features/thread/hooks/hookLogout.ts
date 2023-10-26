import { useNavigate } from "react-router-dom";
import { API }from "../../../lib/api";


export function hooksLogout() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const response = await API.delete("/auth/logout");
      console.log("User berhasil Logout!", response);
      localStorage.setItem("token", response.data.token)
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  }
  return { handleLogout };
}
