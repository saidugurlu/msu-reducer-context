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
                    onClick={() => dispatch({type: "decreaseCount"})}
                >
                    -
                </button>
                <button
                    className="increase"
                    onClick={() => dispatch({type:"increaseCount"})}
                >
                    +
                </button>
            </div>
            <hr/>
		<p>There are {state.germanNouns.length} nouns.</p>
		</div>
	);
}

export default App;
