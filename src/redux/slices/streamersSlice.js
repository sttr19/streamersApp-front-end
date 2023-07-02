import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const fetchStreamers = createAsyncThunk(
  "streamers/fetchStramers",
  async () => {
    const { data } = await axios.get("/streamers");
    return data;
  }
);

const initialState = {
  streamers: {
    items: [],
    status: "loading",
  },
};

export const streamersSlice = createSlice({
  name: "streamers",
  initialState,
  reducers: {},
  extraReducers:{

	[fetchStreamers.pending]:(state)=>{
		state.streamers.items=[];
		state.streamers.status='loading';
	},

	[fetchStreamers.fulfilled]:(state,action)=>{
		state.streamers.items=action.payload;
		state.streamers.status='loaded';
	},

	[fetchStreamers.rejected]:(state)=>{
		state.streamers.items=[];
		state.streamers.status='error';
	},

  }
});

export const streamersReducer = streamersSlice.reducer;
