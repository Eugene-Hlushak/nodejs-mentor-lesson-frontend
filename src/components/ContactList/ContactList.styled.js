import styled from '@emotion/styled';

export const ListContainer = styled('ul')({
  width: '400px',
  height: '515px',
  padding: '10px',
  border: '1px solid black',
  borderRadius: '4px',
  overflowY: 'scroll',
});

export const ContactItem = styled('li')({
  width: '100%',
  marginBottom: '10px',
  padding: '10px',
  backgroundColor: '#dee6bbc5',
  borderRadius: '8px',
});

export const Contact = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const DeleteBtn = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'inherit',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'orangered',
    transition: 'background-color 350ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
});
