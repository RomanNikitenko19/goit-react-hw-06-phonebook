import { createStore } from 'redux';
import { combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import contactsReduser from './contacts/contactsReduser';

const rootReduser = combineReducers({
    contacts: contactsReduser,
});

const store = createStore(rootReduser, devToolsEnhancer());

export default store;