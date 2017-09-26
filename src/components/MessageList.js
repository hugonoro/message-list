import React from 'react';

import MessageItem from './MessageItem'

const MessageList = ({messages}) => (
    <div className="App-message-list">
        { messages
            ? messages.map(message => {
                return (
                    <MessageItem key={message.msgId} message={message}/>
                );
            })
            : <div>Loading Messages...</div>
        }
    </div>
);

export default MessageList;
