/* eslint-disable no-unused-vars */
import { useState, useEffect} from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchReciepentUser = (chat ,user)=>{
  
    const [reciepentUser,setReciepentUser] = useState(null)
    const [error,setError] = useState(null)
    const reciepentId = chat?.members?.find((id)=>id !==user?._id)
 
     

    useEffect(()=>{
        const getUser = async()=>{
            
            if(!reciepentId) return null;
            const response = await getRequest(`${baseUrl}/user/finduser/${reciepentId}`)
            

            if(response.error){
                return setError(error)
            }

            setReciepentUser(response)
        }
        getUser()
    },[])
    
    return {reciepentUser}
}