import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getChatLog, getMembersData} from './service';
import MessageList from './components/MessageList';
import {mergeMessagesWithMembers, sortByTimestamp} from './utils';

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
