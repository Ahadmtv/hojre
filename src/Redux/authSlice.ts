import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Auth, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/Config"
const auth: Auth = getAuth(app);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (payload: { email: string; password: string }) => {
    const { email, password } = payload;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  }
);
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (payload: { email: string; password: string }) => {
    const { email, password } = payload;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  }
);
export const resetPass = createAsyncThunk(
  "auth/resetPass",
  async (payload: { email: string }) => {
    const { email } = payload;
    sendPasswordResetEmail(auth, email);
  }
);

const initialState = {
  user: {},
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...action.payload };
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        console.error(action.error);
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...action.payload };
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        console.error(action.error);
      })
      .addCase(resetPass.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetPass.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(resetPass.rejected, (state, action) => {
        state.isLoading = false;
        console.error(action.error);
      })
  },
});
