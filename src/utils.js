
export const mergeMessagesWithMembers = (messages, members) => {
    if(!((messages && messages.length) || (members && members.length)))
        return {};

    const messageList = messages.map((msg) => {
        const member = members.find((member) => member.id === msg.userId);
        return {
            text: msg.message,
            email: member.email,
            msgId: msg.id,
            avatar: member.avatar,
            timestamp: msg.timestamp
        };
    });
    return {
        messageList
    };
};

export const sortByTimestamp = (messageList) => {
    const sortedList = [].concat(messageList)
        .sort((a,b) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);
            return dateA - dateB;
        });
    return {
        messageList: sortedList
    }
};