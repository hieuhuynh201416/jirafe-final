// // import { createSlice } from "@reduxjs/toolkit";
// // const stateDefault = {
// //   arrProjectCaterory: [],
// // };
// // export const ProjectCateroryReducer = (state = stateDefault, action) => {
// //   switch (action.type) {
// //     default:
// //       return { ...state };
// //   }
// // };
// // //jira37 phut 9 30
// // // lấy dữ liệu về bằng useSelector hoặc máptatetoprops
// import {
//   buildCreateSlice,
//   createAsyncThunk,
//   createSlice,
// } from "@reduxjs/toolkit";
// import { https } from "../../service/api";

// const initialState = {
//   arrProjectCaterory: [],
// };

// const ProjectCaterorySlice = createSlice({
//   name: "ProjectCaterorySlice",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(getAllProjectCaterory.fulfilled, (state, action) => {
//       console.log({ action });
//       state.arrProjectCaterory = action.payload;
//     });
//   },
// });

// export const getAllProjectCaterory = createAsyncThunk(
//   "getAllCaterory/createProject",
//   async () =>
// );

// export const { setCateroryArr } = ProjectCaterorySlice.actions;

// export default ProjectCaterorySlice.reducer;
