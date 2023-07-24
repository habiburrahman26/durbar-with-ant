import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuth(true);
    }
  }, []);

  return isAuth;
};

export default useAuth;
