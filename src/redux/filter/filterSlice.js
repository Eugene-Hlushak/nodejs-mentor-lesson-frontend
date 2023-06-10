import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterName: '',
  },
  reducers: {
    showContactsByName: {
      reducer: (state, { payload }) => {
        return { ...state, filterName: payload };
      },
    },
  },
});

export const { showContactsByName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
