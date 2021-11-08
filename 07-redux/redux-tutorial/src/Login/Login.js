import { useDispatch } from 'react-redux';
import { userSlice } from '../user.slice';

export function Login() {
	// dispatch will change the redux state
	const dispatch = useDispatch();
	
	const handleLogin = () => {
		// we need to change the user in redux
		dispatch(userSlice.actions.setUser({firstName: 'yariv', lastName: 'katz'}))
	}
	
	return (
		<button onClick={ handleLogin }>
			click here to login
		</button>
	)
}