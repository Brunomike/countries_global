import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import countryService from './countryService';
import { RootObject } from '../../interfaces/Country';

interface CountryState{
    country?: RootObject;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

const initialState:CountryState = {
    country: undefined,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
};

export const fetchCountryByName = createAsyncThunk('api/name', async (searchTerm, thunkAPI) => {
    try {
        return await countryService.getCountryByName(searchTerm!);
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});

export const fetchCountryByBorder = createAsyncThunk('api/border', async (searchTerm, thunkAPI) => {
    try {
        return await countryService.getCountryByBorder(searchTerm!);
    } catch (error: any) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
});


export const countrySlice = createSlice({
    name: 'country',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountryByName.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCountryByName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.country = action.payload;
            })
            .addCase(fetchCountryByName.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(fetchCountryByBorder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCountryByBorder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.country = action.payload;
            })
            .addCase(fetchCountryByBorder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export const { reset } = countrySlice.actions;
export default countrySlice.reducer;