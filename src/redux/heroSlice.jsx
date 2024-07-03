

// // import { createSlice } from "@reduxjs/toolkit";
// // const initialState = {
// //   productData: [],
// //   userInfo: null,
// // };

// // export const heroSlice = createSlice({
// //   name: "hero",
// //   initialState,
// //   reducers: {
// //     addToCart: (state, action) => {
// //       const item = state.productData.find(
// //         (item)=>item._id ===action.payload._id
// //       );

// //       if (item) {
// //         item.quantity += action.payload.quantity;
// //       } else {
// //         state.productData.push(action.payload);
// //       }
// //     },
   

// //     increamentQuantity: (state, action) => {
// //       const item = state.productData.find(
// //         (item) => item._id === action.payload._id
// //       );
// //       if (item) {
// //         item.quantity++;
// //       }
// //     },
// //     decrementQuantity: (state, action) => {
// //       const item = state.productData.find(
// //         (item) => item._id === action.payload._id
// //       );
// //       if (item.quantity === 1) {
// //         item.quantity = 1;
// //       } else {
// //         item.quantity--;
// //       }
// //     },
// //     addUser: (state, action) => {
// //       state.userInfo = action.payload;
// //     },
// //     removeUser: (state) => {
// //       state.userInfo = null;
// //     },
// //     deleteItem: 
// //     (state, action) => {
// //       state.productData = state.productData.filter(
// //         (item) => item._id !== action.payload
// //       );
// //     },
// //     resetCart: (state) => {
// //       state.productData = [];
// //     }
// //   }
 
// // })


// // export const {
// //   addToCart,
// //   deleteItem,
// //   resetCart,
// //   incrementQuantity,
// //   decrementQuantity,
// //   addUser,
// //   removeUser,
// // } = heroSlice.actions;

// // export default heroSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(item => item._id === action.payload._id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.productData.find(item => item._id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(item => item._id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(item => item._id !== action.payload);
    },
    resetCart: (state) => {
      state.productData = [];
    }
  }
});

export const {
  addToCart,
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
  addUser,
  removeUser,
} = heroSlice.actions;

export default heroSlice.reducer;

