import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },

  // name : "UserName",
  // inititalState:{
  //   value : "Manish"
  // },
  reducers: {

    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    setZero: (state) =>{
        state.value =0;
    },

    SetName : (state)=>{
      state.value= "Manish Bhusal";
    }
  }
},);
export const { increment, decrement, setZero,setName } = counterSlice.actions;
export default counterSlice.reducer;