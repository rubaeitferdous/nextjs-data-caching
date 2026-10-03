
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const useUser = () => {
    const user = use(UserContext);
    return user;
}

export default useUser;