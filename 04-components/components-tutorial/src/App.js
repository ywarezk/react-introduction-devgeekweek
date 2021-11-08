import './App.css';
import { HelloWorld } from './01-props/HelloWorld';
import { Toggle } from './02-state/Toggle';
import { Counter } from './03-lifecycle/Counter';

function App() {
  return (
    <div className="App">
      <HelloWorld name="Yariv" age={36}>
	  	<p>some custom message</p>
	  
		</HelloWorld>	  
	  
	  
	  <h2>
	  	State
	  </h2>
	  <Toggle />
	  
	  <h2>
	  	Lifecycle
	  </h2>
	  
	  <Counter />
    </div>
  );
}

export default App;
