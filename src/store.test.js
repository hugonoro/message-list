import { messagesReducer, membersReducer } from './store';

describe("Messages", () => {
    it('should return loading when the messages promise is pending', () => {
        const messages = [{
            id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
            userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
            message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
            timestamp: '2017-02-09T04:27:38Z'
        }];

        const updatedStore = messagesReducer({}, {type: 'MESSAGES_LOADING_PENDING', payload: messages});

        expect(updatedStore.isLoading).toEqual(true);
    });

    it('should set messages in the store', () => {
        const messages = [{
            id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
            userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
            message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
            timestamp: '2017-02-09T04:27:38Z'
        }];

        const updatedStore = messagesReducer({}, {type: 'MESSAGES_LOADING_FULFILLED', payload: messages});

        expect(updatedStore.messages).toEqual(messages);
    });

    it('should return error when the messages promise is rejected', () => {
        const messages = [{
            id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
            userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
            message: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
            timestamp: '2017-02-09T04:27:38Z'
        }];

        const updatedStore = messagesReducer({}, {type: 'MESSAGES_LOADING_REJECTED', payload: messages});

        expect(updatedStore.error).toEqual(true);
    });
});

describe("Members", () => {
    it('should return loading when the members promise is pending', () => {
        const members = [{
            id: "cff77726-363e-4ba6-a953-4dc431cdd383",
            firstName: "Ralph",
            lastName: "Nguyen",
            email: "rnguyen6@odnoklassniki.ru",
            avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
            ip: "192.86.3.21"
        }];

        const updatedStore = membersReducer({}, {type: 'MEMBERS_LOADING_PENDING', payload: members});

        expect(updatedStore.isLoading).toEqual(true);
    });

    it('should set members in the store', () => {
        const members = [{
            id: "cff77726-363e-4ba6-a953-4dc431cdd383",
            firstName: "Ralph",
            lastName: "Nguyen",
            email: "rnguyen6@odnoklassniki.ru",
            avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
            ip: "192.86.3.21"
        }];

        const updatedStore = membersReducer({}, {type: 'MEMBERS_LOADING_FULFILLED', payload: members});

        expect(updatedStore.members).toEqual(members);
    });

    it('should return error when the promise is rejected', () => {
        const members = [{
            id: "cff77726-363e-4ba6-a953-4dc431cdd383",
            firstName: "Ralph",
            lastName: "Nguyen",
            email: "rnguyen6@odnoklassniki.ru",
            avatar: "http://dummyimage.com/100x100.png/dddddd/000000",
            ip: "192.86.3.21"
        }];

        const updatedStore = membersReducer({}, {type: 'MEMBERS_LOADING_REJECTED', payload: members});

        expect(updatedStore.error).toEqual(true);
    });
});


