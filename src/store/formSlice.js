import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  place: '',
  disponibility: '',
  sports: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPlace: (state, action) => {
      state.place = action.payload;
    },
    setDisponibility: (state, action) => {
      state.disponibility = action.payload;
    },
    setSports: (state, action) => {
      state.sports = action.payload;
    },
  },
});

export const { setPlace, setDisponibility, setSports } = formSlice.actions;

export default formSlice.reducer;
