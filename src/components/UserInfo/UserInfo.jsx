import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
// import { ListContainer } from './ContactList.styled';

export default function UserInfo() {
  const user = useSelector(selectUser);
  return (
    // <ListContainer>
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <img src={user.avatarURL} alt={user.name} />
    </>

    // </ListContainer>
  );
}
