import Cookie from "js-cookie"
import { jwtDecode } from "jwt-decode";

export const getUserRole = () => { 
    try {
        const token = Cookie.get("access_token")
        const user = jwtDecode(token)
        const role = user.role
        return role; 
    } catch (error) {
        console.error(error)
        return "";
    }  
}

export const isBuyer = getUserRole() === "buyer";
export const isSeller = getUserRole() === "seller";