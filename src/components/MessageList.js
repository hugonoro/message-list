import React from 'react';

import MessageItem from './MessageItem'

const MessageList = (props) => (
    <div className="App-message-list">
        { props.messageList
            ? props.messageList.map(message => {
                return (
                    <MessageItem key={message.msgId} message={message}/>
                );
            })
            : <div>Loading Messages...</div>
        }
    </div>
);

export default MessageList;
