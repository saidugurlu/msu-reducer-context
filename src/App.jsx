import { useContext } from 'react';
import { AppContext } from './AppContext';
import './App.scss';

function App() {
	const { state, dispatch } = useContext(AppContext);

	return (
		<div className="App">
			<h1>Site with useContext/useReducer</h1>
			<p>test: {state.count}</p>
      <div className="buttonArea">
                <button
                    className="decrease"
                    onClick={() => dispatch("decreaseCount")}
                >
                    -
                </button>
                <button
                    className="increase"
                    onClick={() => dispatch("increaseCount")}
                >
                    +
                </button>
            </div>
		</div>
	);
}

export default App;
