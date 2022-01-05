import { createReducer } from "@reduxjs/toolkit";
import { addContacts, deleteContact, changeFilter, getItems } from './contactsAction';
import { combineReducers } from "redux";

const itemsReduser = createReducer([], (builder) => {
  builder

    .addCase(getItems, (state, action) => action.payload)

    .addCase(addContacts, (state, action) => [...state, action.payload])

    .addCase(deleteContact, (state, action) => state.filter((contact) => contact.id !== action.payload));

});

const filterReduser = createReducer("", (builder) => {

  builder.addCase(changeFilter, (state, action) => action.payload);
  
});

const contactsReduser = combineReducers({
  items: itemsReduser,
  filter: filterReduser,
});

export default contactsReduser;
////////////////////////////////////////////////////
// import { createReducer } from "@reduxjs/toolkit";
// import { addContacts, deleteContact, changeFilter, getItems } from './contactsAction';
// import { combineReducers } from "redux";

// const itemsReduser = createReducer([], {
//   [getItems]: (state, action) => action.payload,
//   [addContacts]: (state, action) => [...state, action.payload],
//   [deleteContact]: (state, action) => state.filter((contact) => contact.id !== action.payload),
// });

// const filterReduser = createReducer("", {
//   [changeFilter]: (state, action) => action.payload,
// });

// const contactsReduser = combineReducers({
//   items: itemsReduser,
//   filter: filterReduser,
// });

// export default contactsReduser;
/////////////////////////////////////////////////////////////////////////////
// import { combineReducers } from "redux";
// import TYPES from './contactsTypes';

// const itemsReduser = (state = [], { type, payload }) => {
//   switch (type) {
//     case TYPES.GET:
//       return payload;

//     case TYPES.ADD:
//       return [...state, payload];

//     case TYPES.REMOVE:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filterReduser = (state = "", { type, payload }) => {
//   switch (type) {
//     case TYPES.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

// const contactsReduser = combineReducers({
//   items: itemsReduser,
//   filter: filterReduser,
// });

// export default contactsReduser;
