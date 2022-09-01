import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = contactSlice.actions;
