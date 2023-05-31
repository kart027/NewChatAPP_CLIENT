/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useState } from 'react';
import { baseUrl,getRequest,Postrequest } from '../utils/services';

import Chat from '../pages/Chat';

export const ChatContext = createContext();

export const ChatContextProvider = ({children,user})=>{
    const [userChats,setUserChats] = useState(null)
    const [isUserChatsLoading,setIsUserChatsLoading] = useState(false);
    const [userChatsError,setUserChatsError] = useState(null)
    const [potentialChats,setPotentialChats] = useState([])
    console.log(potentialChats)

    useEffect(()=>{
        const getUsers = async()=>{
            const response = await getRequest(`${baseUrl}/user/getUser`)
          

            if(response.error){
                return console.log("Error fetching user",response)
            }
            
           const pchat =  response.filter((u)=>{
            let isChatCreated = false;
        
          
            if(user?._id === u?._id) return false;
           

            if(userChats){
             isChatCreated =  userChats?.some((chat)=>{
                    return chat.members[0] === u._id || chat.members[1] === u._id;
                })
            }

            return !isChatCreated;


            })
            setPotentialChats(pchat)
        }
        getUsers();
    }, [userChats])

    useEffect(()=>{
        const getUserChats = async ()=>{

            if(user?._id){
                setUserChatsError(null)
                setIsUserChatsLoading(true)
                const response = await getRequest(`${baseUrl}/chat/${user?._id}`)
                setIsUserChatsLoading(false) 
                if (response.error){
                    return setUserChatsError(response)
                }

                setUserChats(response)

            }

           
        };
        getUserChats()
    },[user])

    const createChat = useCallback(async(firstId,secondId)=>{
        const response = await getRequest(`${baseUrl}/chat/find`,JSON.stringify({
            firstId,secondId
        }))

        if(response.error){
            return console.log("Error creating chat",response)
        }
        setUserChats((prev)=>[...prev,response])
    },[])

    return<ChatContext.Provider value={{userChats,userChatsError,isUserChatsLoading,potentialChats,createChat}}>
        {children}
    </ChatContext.Provider>
}