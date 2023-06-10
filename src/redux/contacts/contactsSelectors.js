import { createSelector } from '@reduxjs/toolkit';
import { selectFilterName } from 'redux/filter/filterSelectors';

export const selectContacts = state => state.contacts.items;
export const selectItemsIsLoading = state => state.contacts.itemsIsLoading;
export const selectContactInfo = state => state.contacts.contact;
export const selectContactIsLoading = state => state.contacts.contactIsLoading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filter) => {
    const sortedList = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    if (filter === '') return sortedList;

    return sortedList.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
