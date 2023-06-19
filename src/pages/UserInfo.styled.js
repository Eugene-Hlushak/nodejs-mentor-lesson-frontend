import styled from '@emotion/styled';

export const UserInfoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  boxSizing: 'border-box',
  maxWidth: '600px',
  padding: '10px',
  border: '1px solid #3fb400',
  borderRadius: '4px',
  margin: '0 auto',
});

export const UserAvatar = styled('img')({
  borderRadius: '50%',
  width: '80px',
});

export const UserName = styled('p')({
  margin: 0,
});

export const UserEmail = styled('p')({
  margin: 0,
});
export const InfoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});
