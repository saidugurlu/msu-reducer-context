import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { GermanNounFormRow } from './GermanNounFormRow';

export const ItemAddBox = () => {
	const { state, dispatch } = useContext(AppContext);

	const item = state.addItem;

	return (
		<>
			{state.isAdding && (
				<fieldset className="germanNoun addItem">
					<legend>Add New Item</legend>
					<GermanNounFormRow
						item={item}
						label="Article"
						variable="article"
					/>

					<GermanNounFormRow
						item={item}
						label="Singular"
						variable="singular"
					/>

					<GermanNounFormRow
						item={item}
						label="Plural"
						variable="plural"
					/>

					<div className="buttonRow">
						<div className="message">{item.message}</div>

						<div className="buttonArea">
							<button>Clear</button>
							<button>Add Item</button>
						</div>
					</div>
				</fieldset>
			)}
		</>
	);
};