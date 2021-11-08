import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Login } from './Login/Login';
import { DisplayUser } from './DisplayUser/DisplayUser';

function App() {
  return (
	<Provider store={store} >
		<Login />
		<DisplayUser />
	</Provider>
  );
}

export default App;
