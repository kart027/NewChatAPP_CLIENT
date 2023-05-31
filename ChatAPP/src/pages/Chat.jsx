/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { Container, Stack } from 'react-bootstrap'
import UserChat from '../chat/userChat'
import { AuthContext } from '../context/AuthContext'
import PotentialChat from '../chat/PotentialChat'

const Chat = () => {
  const{user} = useContext(AuthContext)
  const { userChats, userChatsError, isUserChatsLoading } = useContext(ChatContext)


  
  return <Container>
    <PotentialChat/>
    {userChats?.length<1 ?null:(
      <Stack direction='horizontal' gap={4} className='align-item-start'>
        <Stack className='flex-grow-0 pe-3 messages-box'>
        {isUserChatsLoading && <p>Loading chats..</p>}
        {userChats?.map((chat,index)=>{
          return(
            <div key={index}>
              <UserChat chat = {chat} user = {user}/>
            </div>
          )
        })}
        </Stack > 
        <p>ChatBox</p>
      </Stack>
    )}
  </Container>
}

export default Chat
