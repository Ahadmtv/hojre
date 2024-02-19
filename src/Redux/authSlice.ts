import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Auth, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../firebase/Config"
import { doc, getDoc } from "firebase/firestore";
const auth: Auth = getAuth(app);


export const cartinfo = createAsyncThunk(
  'auth/cartinfo',
  async (payload: { uid: string }) => {
    const { uid } = payload;
    const docRef = doc(db, 'users', uid);
    const docSnap=await getDoc(docRef)
    const userdata :any= docSnap.data();
    return userdata.userCartProduct
  }
)

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
    const uid=userCredential.user.providerData[0].uid;
    const ref=doc(db,"users",uid);
    const snapShot= await  getDoc(ref);
    const userdata=snapShot.data();
    return userdata;
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
  productCart:[]
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setUser: (state, action: PayloadAction<object>) => {
      state.user = action.payload
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...action.payload.providerData[0] };
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
      .addCase(cartinfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(cartinfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productCart = {...action.payload};
      })
      .addCase(cartinfo.rejected, (state, action) => {
        state.isLoading = false;
        console.error(action.error);
      })
  },
});
export const { setLoading,setUser } = authSlice.actions