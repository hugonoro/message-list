import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getChatLog, getMembersData} from './service';
import MessageList from './components/MessageList'

import './App.css';

class App extends Component {
    componentDidMount() {
        this.props.getChatLog();
        this.props.getMembersData();
    }
    render() {
        return (
            <div className="App">
                <MessageList messages={this.props.messageList} />
            </div>
        );
    }
}

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

const mapStateToProps = state => {
    const mergedData = mergeMessagesWithMembers(state.messageState.messages, state.memberState.members);
    
    if(mergedData.messageList){
        return sortByTimestamp(mergedData.messageList);
    }
    return mergedData;
};

const mapDispatchToProps = dispatch => bindActionCreators({getChatLog, getMembersData}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
