import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  toastSuccessAdd,
  toastSuccessDelete,
  toastError,
} from 'components/services/toasts';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (credentials, thunkApi) => {
    try {
      const contacts = await axios.post('/contacts', credentials);
      toastSuccessAdd();
      return contacts.data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const contacts = await axios.delete(`/contacts/${id}`);
      toastSuccessDelete();
      return contacts.data;
    } catch (error) {
      toastError();
      return thunkApi.rejectWithValue(error);
    }
  }
);
