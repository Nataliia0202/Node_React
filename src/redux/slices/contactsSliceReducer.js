import {
  fetchContacts,
  addNewContact,
  deleteContact,
} from '../operations/contactsOperations';


const actions = [fetchContacts, addNewContact, deleteContact];

export const getActions = type => actions.map(action => action[type]);

export const handleFetchContacts = (state, action) => {
  state.items = action.payload;
};

export const handleAddNewContact = (state, action) => {
  state.items.push(action.payload);
};

export const handleDeleteContact = (state, action) => {
  const idx = state.items.findIndex(item => item.id === action.meta.arg);
  state.items.splice(idx, 1);
};


export const anyPendingReducer = state => {
  state.isLoading = true;
};

export const anyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const anyFulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};
