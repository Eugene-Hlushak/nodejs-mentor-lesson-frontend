import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contactsOperations';

const initialState = {
  items: [],
  itemsIsLoading: false,
  error: null,
};

const pendingState = state => {
  state.itemsIsLoading = true;
};

const errorState = (state, { payload }) => {
  state.itemsIsLoading = false;
  state.error = payload;
};

export const contactsFetchSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    [fetchContacts.pending]: pendingState,
    [fetchContacts.fulfilled](state, { payload }) {
      state.itemsIsLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: errorState,

    [addContact.pending]: pendingState,
    [addContact.fulfilled](state, { payload }) {
      state.itemsIsLoading = false;
      state.error = null;
      state.items = [...state.items, payload];
    },
    [addContact.rejected]: errorState,

    [deleteContact.pending]: pendingState,
    [deleteContact.fulfilled](state, { payload: { result } }) {
      state.itemsIsLoading = false;
      state.error = null;
      state.items = [...state.items.filter(item => item._id !== result._id)];
    },
    [deleteContact.rejected]: errorState,

    [editContact.pending]: pendingState,
    [editContact.fulfilled](state, { payload }) {
      state.itemsIsLoading = false;
      state.error = null;
      state.items = [
        ...state.items.map(item =>
          item._id === payload._id ? { ...item, ...payload } : item
        ),
      ];
    },
    [editContact.rejected]: errorState,
  },
});

export const contactsReducer = contactsFetchSlice.reducer;
