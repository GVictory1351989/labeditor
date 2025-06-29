import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    ageSex: '',
    address: '',
};

const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        setPatientName: (state, action) => {
            state.name = action.payload;
        },
        setAgeSex: (state, action) => {
            state.ageSex = action.payload;
        },
        setAddress: (state, action) => {
            state.address = action.payload;
        },
    },
});

export const { setPatientName, setAgeSex, setAddress } = patientSlice.actions;

export default patientSlice.reducer;
