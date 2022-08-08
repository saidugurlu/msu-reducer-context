import { useContext } from 'react';
import { AppContext } from './AppContext';
import './App.scss';

function App() {
	const { count, setCount } = useContext(AppContext);

	return (
		<div className="App">
			<h1>Site with useContext/useReducer</h1>
			<p>test: {count}</p>
		</div>
	);
}

export default App;
