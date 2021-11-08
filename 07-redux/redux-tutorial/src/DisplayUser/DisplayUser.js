/**

read the user state from redux

 */
 
import { useSelector } from 'react-redux';
 
export function DisplayUser() {
	// don't enter function
	// use redux toolkit selectors: https://redux-toolkit.js.org/api/createSelector
	const user = useSelector((state) => state.user);
	
	return (
		<h1>
			Hello {user.firstName} {user.lastName}
		</h1>
	)
}