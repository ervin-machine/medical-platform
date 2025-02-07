import React, {useState, useEffect} from 'react'
import Axios  from "axios"
import './Chat.css'
import {Link} from 'react-router-dom';

const style = {
    on: {
        color: 'blue',
    },
    off: {
        color: 'black',
    }
}
function Chat() {
    const [selected, setSelected] = useState({});
    const [message, setMessage] = useState("");
    const [chatList, setChatList] = useState([]);
    const [messageList, setMessageList] = useState([]);
    const [sessionData, setSessionData] = useState([]);
        useEffect(() => {
            getChatList();
            getMessageList();
            getCurrentUser();
        }, [messageList]);

    const getChatList = () => {
        fetch('http://localhost:3001/chatlist')
                .then(response => response.json())
                .then(data => {
                        setChatList(data)}
                        );
    }

    const getMessageList = () => {
        fetch('http://localhost:3001/messageslist')
            .then(response => response.json())
            .then(data => {
                setMessageList(data)
                console.log(messageList)
            })
    }

    let alldata = [];
    alldata = chatList.concat(messageList);
    Axios.defaults.withCredentials = true;
    
    const SendMessage = () => {
        Axios.post('http://localhost:3001/messages', {
            Poruka: message,
            IdPosiljaoca: sessionData.id,
            chat_id: selected.ID
        }).then((response) => {
        })
    }
    const getCurrentUser = () => {
        Axios.get("http://localhost:3001/login").then((response) =>{
        if(response.data.loggedIn == true) {
            setSessionData(response.data.user)
            console.log(sessionData)
      }
    })
}
    const onSelect = (item) => {
        setSelected(item);
    }
    return (
        <div className="Chat-App">
            
            <div className="chat-sidebar">
                <div className="channel-list">
                    {alldata.map((chat) => (
                        <div className="channel" key={chat.ID} onClick={() => onSelect(chat)}>
                            {chat.ImeChata}
                        </div>
                    ))}
                </div>
                <div className="messages">
                    { selected.ID && (
                        <div>
                            <p>{selected.Poruka}</p>
                            {messageList.map((message) => (
                                <div className="message">{message.ID == selected.ID ? 
                                    <div>
                                    <p className="message-poruka">{message.Poruka}</p>
                                    <p className="message-sender">Poslao {message.username}</p>
                                    </div>
                                    : null}
                                    </div>
                            ))}
                        </div>
                    )
                    }
                    <div className="send-message">
                        <input className="send-input" placeholder="Type message..." onChange={(e) => setMessage(e.target.value)}/>
                        <button className="send-button" onClick={SendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
