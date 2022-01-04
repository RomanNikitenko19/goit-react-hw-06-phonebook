import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import contactsReduser from "./contacts/contactsReduser";

const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
});

const store = configureStore({
    reducer: {
        contacts: contactsReduser,
    },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
////////////////////////////////////////////////////////////////////////////////
// import { createStore } from 'redux';
// import { combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import contactsReduser from './contacts/contactsReduser';

// const rootReduser = combineReducers({
//     contacts: contactsReduser,
// });

// const store = createStore(rootReduser, devToolsEnhancer());

// export default store;
