import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import defaultService from './defaultService';

const initialState = {
    countries: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};


const fetchCountries = createAsyncThunk('api/all', async (_, thunkAPI) => {
    try {
        return await defaultService.getCountries();
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

export const defaultSlice = createSlice({
    name: 'countries',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.countries = action.payload
        })
        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.countries = []
        })
    }
})

export const { reset } = defaultSlice.actions;
export default defaultSlice.reducer;