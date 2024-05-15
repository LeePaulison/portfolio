import { useState, useEffect } from "react";

export function useIP() {
  const [ip, setIP] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => setIP(data.ip))
      .catch((err) => console.error(err));
  }, []);

  return ip;
}
