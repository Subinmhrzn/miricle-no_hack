import { useEffect, useState } from "react";
import { getUserRole } from "../../utils/user";

export const useUserRole = () => {
    const [isSeller, setIsSeller] = useState(false)
    
  useEffect(() => {
    if (getUserRole()) {
      const role = getUserRole();
      setIsSeller(role === "seller")
    }
  }, [getUserRole()])

  return {
    isSeller
  }
}