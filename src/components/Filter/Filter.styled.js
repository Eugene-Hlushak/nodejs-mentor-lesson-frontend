import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const CommonInput = styled(TextField)({
  marginBottom: '10px',
  width: '300px',

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
