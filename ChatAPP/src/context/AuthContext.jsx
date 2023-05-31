/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {createContext,useCallback,useContext,useEffect,useState} from "react";
import { Postrequest ,baseUrl} from "../utils/services";




export const AuthContext = createContext();
export const AuthContextProvider = ({children})=>{
    const[user,setuser] = useState(null);
    const[registerError,setRegisterError] = useState(null)
    const[isRegisterLoading,setIsRegisterLoading] = useState(false)
    const [loginError, setLoginError] = useState(null)
    const [isLoginLoading, setIsLoginLoading] = useState(false)
    const[registerInfo,setRegisterInfo] = useState({
        name:"",
        email:"",
        password:""
    })
    const [loginInfo, setLoginInfo] = useState({
      
        email: "",
        password: ""
    })



    useEffect(()=>{
        const user = localStorage.getItem("User")
        setuser(JSON.parse(user))
    },[])

    const registerUser = useCallback(async (e)=>{
        e.preventDefault()
        setIsRegisterLoading(true);
        setRegisterError(null);
        const response = await Postrequest(`${baseUrl}/user/register`,JSON.stringify(registerInfo))
        setIsRegisterLoading(false)
     
        if(response.error){
            return setRegisterError(response)
        }

        localStorage.setItem("User",JSON.stringify(response))
        setuser(response)
    },[registerInfo])

    const loginUser = useCallback(async (e) => {
        e.preventDefault()
        setIsLoginLoading(true);
        setLoginError(null);
        const response = await Postrequest(`${baseUrl}/user/login`, JSON.stringify(loginInfo))
        setIsLoginLoading(false)
     

        if (response.error) {
            return setLoginError(response)
        }

        localStorage.setItem("User", JSON.stringify(response))
        setuser(response)
    }, [loginInfo])

    const logOutUser = useCallback(()=>{
        localStorage.removeItem("User")
        setuser(null);
    },[])

    const updateRegisterInfo = useCallback((info)=>{
        setRegisterInfo(info)
    },[])

    const updateloginUser = useCallback((info) => {
        setLoginInfo(info)
    }, [])

    return <AuthContext.Provider value={{
        user,registerInfo,registerError,isRegisterLoading,registerUser,updateRegisterInfo,logOutUser,loginUser,updateloginUser,isLoginLoading,loginError,loginInfo
    }}>
           {children}
    </AuthContext.Provider>
};




