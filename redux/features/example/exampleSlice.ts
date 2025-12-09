// redux/features/example/exampleSlice.ts
// Tiny example slice to showcase Redux Toolkit patterns
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type ExampleState = {
  items: string[];
  loading: boolean;
  error: string | null;
};

const initialState: ExampleState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchExamples = createAsyncThunk('example/fetch', async () => {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return [
    'Ship quickly with Expo Router',
    'Keep UI + state lean',
    'Swap backends without rewrites',
  ];
});

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addExample: (state, action: PayloadAction<string>) => {
      state.items.unshift(action.payload);
    },
    clearExamples: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchExamples.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExamples.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchExamples.rejected, (state) => {
        state.loading = false;
        state.error = 'Unable to load example data.';
      });
  },
});

export const { addExample, clearExamples } = exampleSlice.actions;
export default exampleSlice.reducer;
