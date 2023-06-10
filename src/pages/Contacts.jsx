import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom/dist';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Container } from './Pages.styled';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { selectUserIsLoggedin } from 'redux/auth/authSelectors';
import { GlobalStyle, Title } from '../components/GlobalStyle';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const userLoggedIn = useSelector(selectUserIsLoggedin);

  useEffect(() => {
    if (userLoggedIn) dispatch(fetchContacts());
  }, [dispatch, userLoggedIn]);

  if (!userLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <Container>
      <div style={{ marginRight: 20 }}>
        <Title>Add new contact</Title>
        <ContactForm />
      </div>
      <div>
        <Title>
          Contacts: {contacts.length > 0 && <span>{contacts.length}</span>}
        </Title>
        <Filter />
        <ContactList />
      </div>
      {/* #7c8848 */}
      <GlobalStyle />
    </Container>
  );
}
