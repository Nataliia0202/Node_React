import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getActions, handleFetchContacts, handleAddNewContact, handleDeleteContact, anyPendingReducer, anyRejectedReducer, anyFulfilledReducer} from './contactsSliceReducer'
import {
  fetchContacts,
  addNewContact,
  deleteContact,
} from '../operations/contactsOperations';


const phonebookContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(addNewContact.fulfilled, handleAddNewContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(isAnyOf(...getActions('fulfilled')), anyFulfilledReducer)
      .addMatcher(isAnyOf(...getActions('pending')), anyPendingReducer)
      .addMatcher(isAnyOf(...getActions('rejected')), anyRejectedReducer),
});

export const { setFilter } = phonebookContactsSlice.actions;
export const phonebookContactsReducer = phonebookContactsSlice.reducer;
