import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const ItemAddBox = () => {
	const { state, dispatch } = useContext(AppContext);

	return <>{state.isAdding && <div>adding item, component...</div>}</>;
};