import { createAction } from "@reduxjs/toolkit";

const getItems = createAction("contacts/items_get");
const addContacts = createAction("contacts/item_add");
const deleteContact = createAction("contacts/item_delete");
const changeFilter = createAction("contacts/filter_chage");

export { addContacts, deleteContact, changeFilter, getItems };
//////////////////////////////////////////////////////////////
// import TYPES from "./contactsTypes";

// const getItems = items => ({
//   type: TYPES.GET,
//   payload: items,
// });

// const addContacts = contact => ({
//   type: TYPES.ADD,
//   payload: contact,
// });

// const deleteContact = id => ({
//   type: TYPES.REMOVE,
//   payload: id,
// });

// const changeFilter = value => ({
//   type: TYPES.FILTER,
//   payload: value,
// });

// export { addContacts, deleteContact, changeFilter, getItems };
