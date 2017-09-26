import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {mount} from 'enzyme';

import App from './App';

describe("App container", () => {
    it('should render without crashing', () => {

        const mockStore = configureStore();
        const store = mockStore({
            messageState: {
                messages: []
            },
            memberState: {
                members: []
            }
        });
        const wrapper = mount(<Provider store={store}><App/></Provider>);

        expect(wrapper.find(App).length).toEqual(1)

    });
});

