// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
//   filter: "",
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState,
//   reducers: {
//     getItems: (state, { payload }) => {
//       state.items = payload;
//     },

//     addContact: (state, { payload }) => {
//       state.items = [...state.items, payload];
//     },

//     deleteContact: (state, { payload }) => {
//       const index = state.items.findIndex(contact => contact.id === payload.id);
//       state.items.splice(index, 1);
//     },

//     changeFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
// });

// export const { getItems, addContact, deleteContact, changeFilter } = contactsSlice.actions;

// export default contactsSlice.reducer;

////////////////////////////////////////////////////////////////////////////////////////////////
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    getItems: (state, { payload }) => ({ ...state, items: payload }),

    addContact: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),

    deleteContact: (state, { payload }) => ({
      ...state,
      items: state.items.filter((contact) => contact.id !== payload),
    }),

    changeFilter: (state, { payload }) => ({ ...state, filter: payload }),
  },
});

export const { getItems, addContact, deleteContact, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
///////////////////////////////////////////////////////////////////
// import { createSlice, combineReducers } from "@reduxjs/toolkit";

// const itemsSlice = createSlice({
//   name: "items",
//   initialState: [],
//   reducers: {
//     getItems: (state, {payload}) => payload,

//     addContact: (state, {payload}) => [...state, payload],

//     deleteContact: (state, {payload}) => state.filter((contact) => contact.id !== payload),
//   },
// });

// const filterSlice = createSlice({
//   name: "filter",
//   initialState: "",
//   reducers: {
//     changeFilter: (state, {payload}) => payload,
//   },
// });

// export const { getItems, addContact, deleteContact } = itemsSlice.actions;
// export const { changeFilter } = filterSlice.actions;

// const contactsReduser = combineReducers({
//   [itemsSlice.name]: itemsSlice.reducer,
//   [filterSlice.name]: filterSlice.reducer,
// });

// export default contactsReduser;
