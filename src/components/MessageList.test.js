import React from 'react';
import {shallow} from 'enzyme';
import MessageList from "./MessageList";

describe("Message list component", () => {
    it("should render a loading message when the list is empty", () => {
        const wrapper = shallow(<MessageList/>);

        const expected = (
            <div>Loading Messages...</div>
        );
        expect(wrapper.contains(expected)).toEqual(true);
    });

    it("should not render a loading message when the list is populated", () => {

        const messageList = [
            {
                msgId: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
                text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
                email: "rnguyen6@odnoklassniki.ru",
                avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
                timestamp: '2017-02-09T04:27:38Z'
            }
        ];

        const wrapper = shallow(<MessageList messageList={messageList}/>);

        const expected = (
            <div>Loading Messages...</div>
        );
        expect(wrapper.contains(expected)).toEqual(false);
    });

    it("should render a list of messages when the list is populated", () =>{
        const messageList = [
            {
                msgId: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
                text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
                email: "rnguyen6@odnoklassniki.ru",
                avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
                timestamp: '2017-02-09T04:27:38Z'
            },
            {
                msgId: '3a59859e-33f1-4c2b-a636-1f119c484dc8',
                text: 'Suspendisse potenti.',
                email: "rnguyen6@odnoklassniki.ru",
                avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
                timestamp: '2017-02-09T04:27:38Z'
            }
        ];

        const wrapper = shallow(<MessageList messageList={messageList}/>);

        expect(wrapper.find('MessageItem').length).toEqual(messageList.length);
    })
});
