import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Overlay, ModalWindow } from './EditContact.styled';
import { CommonButton, CommonInput } from '../ContactForm/ContactForm.styled';
import { Box } from '@mui/material';
import { editContact } from '../../redux/contacts/contactsOperations';

const modalRoot = document.querySelector('#modal-root');

export default function EditContact({
  contactId,
  currentName,
  currentNumber,
  clickOnBackdrop,
}) {
  const [name, setName] = useState(currentName);
  const [number, setNumber] = useState(currentNumber);
  const dispatch = useDispatch();

  const changeContact = e => {
    e.preventDefault();
    if (!name && !number) {
      alert(`Please, fill in the field you want to change`);
      return;
    }
    if (!name) {
      const body = { contactId, number };

      return dispatch(editContact(body));
    } else if (!number) {
      const body = { contactId, name };

      return dispatch(editContact(body));
    } else {
      const body = { contactId, name, number };

      return dispatch(editContact(body));
    }
  };

  return createPortal(
    <Overlay onClick={clickOnBackdrop}>
      <ModalWindow>
        <Box
          component={'form'}
          onSubmit={changeContact}
          autoComplete="off"
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CommonInput
            label="Name"
            type="text"
            variant="outlined"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <CommonInput
            label="Number"
            type="tel"
            pattern="[0-9]"
            variant="outlined"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <CommonButton variant="outlined" type="submit">
            Save changes
          </CommonButton>
        </Box>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
}

EditContact.propTypes = {
  contactId: PropTypes.string.isRequired,
  currentName: PropTypes.string.isRequired,
  currentNumber: PropTypes.string.isRequired,
  clickOnBackdrop: PropTypes.func.isRequired,
};
