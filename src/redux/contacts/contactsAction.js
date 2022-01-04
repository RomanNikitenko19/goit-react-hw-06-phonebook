import TYPES from "./contactsTypes";

const getItems = items => ({
  type: TYPES.GET,
  payload: items,
});

const addContacts = contact => ({
  type: TYPES.ADD,
  payload: contact,
});

const deleteContact = id => ({
  type: TYPES.REMOVE,
  payload: id,
});

const changeFilter = value => ({
  type: TYPES.FILTER,
  payload: value,
});

export { addContacts, deleteContact, changeFilter, getItems };