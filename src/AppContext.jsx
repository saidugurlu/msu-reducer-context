import axios from "axios";
import { createContext, useReducer,useEffect } from "react";

 

export const AppContext = createContext();
const initialState = {
  count: 0,
  germanNouns: []
};

function reducer(state, action) { //action is an object with a type property and a payload property
  const _state = { ...state };
  switch (action.type) {
    case "increaseCount":
      _state.count++;
      break;
    case "decreaseCount":
      _state.count--;
      break;
      case 'loadGermanNouns':
        _state.germanNouns = action.payload;//action.payload is the data that is returned from the server
        break;
        case 'toggleEditStatus':
          const item = action.payload;
          item.isEditing = !item.isEditing;
          item.message = item.isEditing ? 'Editing item...' : '';
      }
      return _state;
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(() => {
		(async () => {
			const _germanNouns = ((await axios.get('http://localhost:4555/germanNouns')).data);

      _germanNouns.forEach(noun => {
				noun.isEditing = false;
        noun.message = '';
			})

			dispatch({ type: 'loadGermanNouns', payload: _germanNouns });
      
		})();
	}, []);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
