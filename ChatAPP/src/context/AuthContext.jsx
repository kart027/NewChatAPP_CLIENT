/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import {createContext,useCallback,useContext,useState} from "react";
import { Postrequest ,baseUrl} from "../utils/services";




export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
    const[user,setuser] = useState(null);
    const[registerError,setRegisterError] = useState(null)
    const[isRegisterLoading,setIsRegisterLoading] = useState(false)
    const[registerInfo,setRegisterInfo] = useState({
        name:"",
        email:"",
        password:""
    })

    const registerUser = useCallback(async (e)=>{
        e.preventDefault()
        setIsRegisterLoading(true);
        setRegisterError(null);
        const response = await Postrequest(`${baseUrl}/register`,JSON.stringify(registerInfo))
        setIsRegisterLoading(false)
        console.log(response)

        if(response.error){
            return setRegisterError(response)
        }

        localStorage.setItem("User",JSON.stringify(response))
        setuser(response)
    },[registerInfo])

    const updateRegisterInfo = useCallback((info)=>{
        setRegisterInfo(info)
    },[])

    return <AuthContext.Provider value={{
        user,registerInfo,registerError,isRegisterLoading,registerUser,updateRegisterInfo
    }}>
           {children}
    </AuthContext.Provider>
};




