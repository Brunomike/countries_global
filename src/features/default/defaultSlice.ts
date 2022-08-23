import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootObject } from "../../interfaces/Country";
import defaultService from './defaultService';

interface DefaultState {
    countries: RootObject[];
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

const initialState: DefaultState = {
    countries: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};


export const fetchCountries = createAsyncThunk('api/all', async (_, thunkAPI) => {
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
        },
        filterByRegion: (state, region) => {

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
        builder.addCase(fetchCountries.rejected, (state) => {
            state.isLoading = false
            state.isError = true
        })
    }
})

export const { reset } = defaultSlice.actions;
export default defaultSlice.reducer;