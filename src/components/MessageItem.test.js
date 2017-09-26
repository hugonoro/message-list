import React from 'react';
import {shallow} from 'enzyme';
import MessageItem from "./MessageItem";

describe("Message items in list", () => {

    it("should display an avatar", () => {
        const message =
            {
                msgId: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
                text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
                email: "rnguyen6@odnoklassniki.ru",
                avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
                timestamp: '2017-02-09T04:27:38Z'
            };

        const wrapper = shallow(<MessageItem message={message}/>);

         const expected = (
             <img src='http://dummyimage.com/100x100.png/dddddd/000000' alt='user'></img>
         );
        expect(wrapper.contains(expected)).toEqual(true);
    });

    it("should display a 'not found' image when no avatar is provided", () => {
        const message =
            {
                msgId: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
                text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
                email: "rnguyen6@odnoklassniki.ru",
                avatar: null,
                timestamp: '2017-02-09T04:27:38Z'
            };

        const wrapper = shallow(<MessageItem message={message}/>);

        const expected = (
            <img src='https://dummyimage.com/100x100/000/fff&text=No+image+available' alt='user'></img>
        );
        expect(wrapper.contains(expected)).toEqual(true);
    });

    it("should display the message text", () => {
        const message =
            {
                msgId: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
                text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
                email: "rnguyen6@odnoklassniki.ru",
                avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
                timestamp: '2017-02-09T04:27:38Z'
            };

        const wrapper = shallow(<MessageItem message={message}/>);

        const expected = (
            <span className="App-message-text" title={message.email}>{message.text}</span>
        );
        expect(wrapper.contains(expected)).toEqual(true);
    });
});