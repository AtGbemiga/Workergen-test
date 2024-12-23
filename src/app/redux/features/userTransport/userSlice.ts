"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface UserState {
  img?: string;
  name?: string;
  position?: string;
  topic?: string;
  title?: string;
  subtitle?: string;
  type?: "person" | "business" | "";
  keyword?: string;
}

const initialState: UserState = {
  img: "",
  name: "",
  position: "",
  topic: "",
  type: "",
  title: "",
  subtitle: "",
  keyword: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserTransport: (state, action: PayloadAction<UserState>) => {
      const user = action.payload;
      state.img = user.img; // assign the img property of the user object
      state.name = user.name;
      state.position = user.position;
      state.topic = user.topic;
      state.type = user.type;
      state.title = user.title;
      state.subtitle = user.subtitle;
      state.keyword = user.keyword;
    },
  },
});

export const { setUserTransport } = userSlice.actions;

export const userRootState = (state: RootState) => state.user;

export default userSlice.reducer;
