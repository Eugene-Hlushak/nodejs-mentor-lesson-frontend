import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GoTrashcan } from 'react-icons/go';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { ContactItem, Contact, DeleteBtn } from './ContactList.styled';
import EditContact from '../EditContact/EditContact';

export default function ContactListItem({ contact: { name, number, id } }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (showModal) {
      document.addEventListener('keydown', closeModalByEsc);
    }

    return () => document.removeEventListener('keydown', closeModalByEsc);
  }, [showModal]);

  const openModal = e => {
    setShowModal(true);
  };

  const closeModalByEsc = e => {
    if (e.code === 'Escape') {
      setShowModal(false);
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShowModal(false);
    }
  };

  return (
    <ContactItem>
      <Contact onClick={openModal}>
        <p>
          {name}: {number}
        </p>
        <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
          <GoTrashcan size={20} color={'black'} />
        </DeleteBtn>
      </Contact>
      {showModal && (
        <EditContact
          contactId={id}
          currentName={name}
          currentNumber={number}
          clickOnBackdrop={handleBackdropClick}
        />
      )}
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
