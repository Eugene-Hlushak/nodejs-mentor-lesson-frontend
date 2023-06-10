import { styled } from '@mui/material/styles';
import { Button, TextField, Box } from '@mui/material';

export const Container = styled('div')({
  // height: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const CommonButton = styled(Button)({
  width: '500px',
  marginBottom: '10px',
  backgroundColor: '#3fb400',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#fa531bf8',
  },
});

export const CommonInput = styled(TextField)({
  marginBottom: '10px',
  width: '500px',
  '& label.Mui-focused': {
    color: 'green',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'green',
    },

    '&:hover fieldset': {
      borderColor: '#fa531bf8',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

export const CommonForm = styled(Box)({
  display: 'flex',
  p: '20px',
  flexDirection: 'column',
  alignItems: 'center',
});
