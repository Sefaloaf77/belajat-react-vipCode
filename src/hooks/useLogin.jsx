import { useState, useEffect } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  // decode username dari API untuk ditampilkan di navbar
  useEffect(() => {
    const dataFromToken = localStorage.getItem("token");
    if (dataFromToken) {
      setUsername(getUsername(dataFromToken));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return username
};
