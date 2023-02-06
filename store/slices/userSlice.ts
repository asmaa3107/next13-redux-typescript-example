import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Api Service For fetching data
export const fetchUsers = createAsyncThunk(
    "users/getAllUsers",
    async (thunkApi) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
      );
      const data = await response.json();
      return data;
    }
  );

// initial state, types ond values
const initialState = {
    entities: [],
    loading: false,
    value: 10,
  } as any;


// Redux : Create Slice
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
     // standard reducer logic, with auto-generated action types per reducer
      increment: (state) => {
        state.value++;
      },
    },
    extraReducers: (builder) => {
     // Add reducers for additional action types here, and handle loading state as needed
     //fulfield is an action type craeted by createAsyncThunk function
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.entities.push(...action.payload);
      });
  
      builder.addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      });
    },
  });
  
  //export reducer action function
  export const { increment } = userSlice.actions;
  
  export default userSlice.reducer;