/**
 * form 
 - email
 - password
 
 1. grab user input
 2. validate user input
 3. error
 
 
 
 */
 
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
 

export function Login() {
	const handleLoginSubmit = async (values) => {
		console.log(values);
		const response = await axios.post(
			'https://academeez-login-ex.herokuapp.com/api/users/login', 
			// {email: '', password: ''}
			values
		)
		console.log(response.data);
		
		/*
		{
			Authorization: Bearer <jwt token>
		}
		
		localStorage.setItem(...)
		cookies - CSRF
		
		
		*/
	}
	
	return (
		<Formik
			initialValues={ {
				email: 'yariv@nerdeez.com',
				password: ''
			} }
			onSubmit={handleLoginSubmit}
		>
			<Form>
				<div>
					<Field
						name="email" 
						type="email" placeholder="enter your mail" />
				</div>
				<div>
					<Field 
						name="password"
						type="password" placeholder="*****" />
				</div>
				<div>
					<button type="submit">
						Login
					</button>
				</div>
			</Form>
		</Formik>
		
	)
}