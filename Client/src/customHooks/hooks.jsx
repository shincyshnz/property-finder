import { useContext } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { AuthContext } from "../context/AuthContext";

export const useError = () => {
    return useContext(ErrorContext);
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}