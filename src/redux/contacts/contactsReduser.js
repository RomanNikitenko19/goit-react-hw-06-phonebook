import { combineReducers } from "redux";
import TYPES from './contactsTypes';

const itemsReduser = (state = [], { type, payload }) => {
  switch (type) {
    case TYPES.GET:
      return payload;

    case TYPES.ADD:
      return [...state, payload];

    case TYPES.REMOVE:
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filterReduser = (state = "", { type, payload }) => {
  switch (type) {
    case TYPES.FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReduser = combineReducers({
  items: itemsReduser,
  filter: filterReduser,
});

export default contactsReduser;
