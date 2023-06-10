import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';
import { CommonButton, CommonInput } from './ContactForm.styled';
import { Box } from '@mui/material';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const saveNewContact = e => {
    e.preventDefault();
    const checkContactName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const checkContactNumber = contacts.find(
      contact => contact.number === number
    );

    if (checkContactName || checkContactNumber) {
      if (checkContactName) {
        alert(`${name} is already in contacts`);
        return;
      } else {
        alert(`${number} is already in contacts`);
        return;
      }
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Box
      component={'form'}
      onSubmit={saveNewContact}
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CommonInput
        required
        label="Name"
        type="text"
        variant="outlined"
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <CommonInput
        required
        label="Number"
        type="tel"
        pattern="[0-9]"
        variant="outlined"
        name="number"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <CommonButton variant="outlined" type="submit">
        Add contact
      </CommonButton>
    </Box>
  );
}
