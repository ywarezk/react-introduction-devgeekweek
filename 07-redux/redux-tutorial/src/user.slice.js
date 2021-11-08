

/**

slice manage change in redux

 */
 
 import { createSlice } from '@reduxjs/toolkit';
 
 export const userSlice = createSlice({
	 name: 'user',
	 initialState: {
		 firstName: null,
		 lastName: null
	 },
	 reducers: {
		 setUser(state, action) {
			 state.firstName = action.payload.firstName;
			 state.lastName = action.payload.lastName;
		 }
	 }
 })