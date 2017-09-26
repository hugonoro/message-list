import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools} from 'redux-devtools-extension';

export function messagesReducer(state = {}, action) {
  switch(action.type){
      case 'MESSAGES_LOADING_PENDING':
        // TODO: handle isLoading in the components
        return Object.assign({}, state, {
            isLoading: true,
            error: false,
            messages: []
        });
      case 'MESSAGES_LOADING_FULFILLED':
          return Object.assign({}, state, {
              isLoading: false,
              error: false,
              messages: action.payload,
          });
      case 'MESSAGES_LOADING_REJECTED':
        // TODO: handle error in the components
          return Object.assign({}, state, {
              isLoading: false,
              error: true,
              messages: []
          });
      default:
          return state;
  }
}

export function membersReducer(state = {}, action) {
    switch(action.type){
        case 'MEMBERS_LOADING_PENDING':
            // Typical state to support loading stage
            return Object.assign({}, state, {
                isLoading: true,
                error: false,
                members: []
            });
        case 'MEMBERS_LOADING_FULFILLED':
            return Object.assign({}, state, {
                isLoading: false,
                error: false,
                members: action.payload,
            });
        case 'MEMBERS_LOADING_REJECTED':
            // Returns error=true to be handled later
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                members: []
            });
        default:
            return state;
    }
}

export const store = createStore(combineReducers({messageState: messagesReducer,memberState: membersReducer}), {}, composeWithDevTools(applyMiddleware(
  promiseMiddleware()
)));