import { styled } from '@mui/material/styles';
import { Button, TextField } from '@mui/material';

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
