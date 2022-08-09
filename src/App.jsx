import { useContext } from "react";
import { AppContext } from "./AppContext";
import "./App.scss";

function App() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="App">
      <h1>Site with useContext/useReducer</h1>
      <p>test: {state.count}</p>
      <div className="buttonArea">
        <button
          className="decrease"
          onClick={() => dispatch({ type: "decreaseCount" })}
        >
          -
        </button>
        <button
          className="increase"
          onClick={() => dispatch({ type: "increaseCount" })}
        >
          +
        </button>
      </div>
      <hr />
      <p>There are {state.germanNouns.length} nouns.</p>
      <div className="germanNounArea">
        {state.germanNouns.map((item, i) => {
          return (
            <fieldset className="germanNoun" key={i}>
              <legend>ID: {item.id}</legend>

              <div className="row">
                <label htmlFor="article">Article</label>
                <div className="value">{item.article}</div>
              </div>

              <div className="row">
                <label htmlFor="singular">Singular</label>
                <div className="value">{item.singular}</div>
              </div>

              <div className="row">
                <label htmlFor="plural">Plural</label>
                <div className="value">{item.plural}</div>
              </div>

              <div className="buttonRow">
                <button>Edit</button>
                <button>Delete</button>
                <button>Add</button>
              </div>
            </fieldset>
          );
        })}
      </div>
    </div>
  );
}

export default App;
