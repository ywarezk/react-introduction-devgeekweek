/**

create redux store that holds data


 */
 
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user.slice';

// configureStore will help me create the redux store

export const store = configureStore({
	reducer: {
		user: userSlice.reducer
	} ,
	
})