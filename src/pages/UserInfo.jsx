import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import {
  InfoContainer,
  UserAvatar,
  UserEmail,
  UserInfoContainer,
  UserName,
} from './UserInfo.styled';
// import { ListContainer } from './ContactList.styled';

export default function UserInfo() {
  const user = useSelector(selectUser);
  return (
    <UserInfoContainer>
      <UserAvatar src={user.avatarURL} alt={user.name} />
      <InfoContainer>
        Name:
        <UserName>{user.name}</UserName>
      </InfoContainer>
      <InfoContainer>
        Email:
        <UserEmail>{user.email}</UserEmail>
      </InfoContainer>
    </UserInfoContainer>
  );
}
