import {getChatLog, getMembersData} from "./service";

describe("Messages", () => {
    it("should return messages_loading action type", () =>{
        const expectedType = "MESSAGES_LOADING";

        const actionCreator = getChatLog();

        expect(actionCreator.type).toEqual(expectedType);
    });
    it.skip("should return a list of messages from the api", () =>{
        // TODO
    });
});

describe("Members", () => {
    it("should return messages_loading action type", () =>{
        const expectedType = "MEMBERS_LOADING";

        const actionCreator = getMembersData();

        expect(actionCreator.type).toEqual(expectedType);
    });
    it.skip("should return a list of messages from the api", () =>{
        // TODO
    });
});