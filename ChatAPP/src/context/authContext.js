/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {createContext,useCallback,useState} from "react";
export const authContext = createContext()

export const AUTHCONTEXTPROVEIDER = ({ childern })=>{
    const[user,setuser] = useState(null);
    const[registerInfo,setRegisterInfo] = useState({
        name:"",
        emaiul:"",
        password:""
    })

    const updateRegisterInfo = useCallback((info)=>{
        setRegisterInfo(info)
    },[])

    return <authContext.Provider value={{
        user,registerInfo,updateRegisterInfo
    }}>
           {childern}
    </authContext.Provider>
};
