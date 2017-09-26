import React from 'react';
import Moment from 'react-moment';

const MessageItem = ({message}) => (
    <article>
        <span className="App-message-avatar">
            <img src={message.avatar
                ? message.avatar
                : 'https://dummyimage.com/100x100/000/fff&text=No+image+available'}
                 alt="user">
            </img>
        </span>
        <span className="App-message-text" title={message.email}>{message.text}</span>
        <span className="App-message-time">
            <Moment format="DD/MM/YYYY HH:mm">{message.timestamp}</Moment>
        </span>
    </article>
)

export default MessageItem;