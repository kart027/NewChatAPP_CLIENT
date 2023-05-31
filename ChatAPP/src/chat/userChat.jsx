/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Stack } from "react-bootstrap";
import { useFetchReciepentUser } from "../hooks/useFetchReciepent";
import avatar from "../assets/avatar.svg.svg"

const UserChat = ({chat,user}) => {
   
   
    const { reciepentUser } = useFetchReciepentUser(chat,user);
    console.log(reciepentUser)
    
    

    return <Stack direction="horizontal" gap={3} className="user-card align-item-center p-2 justify-content-between" role="button">
        <div className="d-flex">
            <div className="me-2">
                <img src={avatar} height="35px" />
            </div>
            <div className="text-content">
                <div className="name">
                    {reciepentUser?.name}
                </div>
                <div className="text">
                    Text Message
                </div>
            </div>
        </div>
        <div className="d-flex flex-column align-items-end">
            <div className="date">
                12/12/2023
            </div>
            <div className="this-user-notifications">
                2
            </div>
            <span className="user-online"></span>
        </div>
    </Stack>
}
export default UserChat;
