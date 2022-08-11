export const ItemButtonArea = ({ item, dispatch }) => {
	const handleAddButtonClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		dispatch({type: 'turnAddingOn'})
	}

	return (
		<>
			<div className="buttonArea">
				{!item.isEditing && !item.isDeleting && (
					<>
						<button
							disabled={item.isProcessing}
							onClick={() =>
								dispatch({
									type: 'toggleEditStatus',
									payload: { item },
								})
							}
						>
							Edit
						</button>
						<button
							disabled={item.isProcessing}
							onClick={() =>
								dispatch({
									type: 'askIfSureForDelete',
									payload: { item },
								})
							}
						>
							Delete
						</button>
						<button
							disabled={item.isProcessing}
							onClick={handleAddButtonClick}
						>Add</button>
					</>
				)}
				{item.isEditing && (
					<>
						<button
							disabled={item.isProcessing}
							onClick={() =>
								dispatch({
									type: 'cancelEditStatus',
									payload: { item },
								})
							}
						>
							Cancel
						</button>
						<button
							disabled={item.isProcessing}
							onClick={() =>
								dispatch({
									type: 'saveItem',
									payload: { item },
								})
							}
						>
							Save
						</button>
					</>
				)}
				{item.isDeleting && (
					<>
						<button
							disabled={item.isProcessing}
							onClick={() =>
								dispatch({
									type: 'cancelDeleteStatus',
									payload: { item },
								})
							}
						>
							Cancel
						</button>
						<button
							disabled={item.isProcessing}
							onClick={() =>
								dispatch({
									type: 'deleteItem',
									payload: { item },
								})
							}
						>
							Yes, delete item!
						</button>
					</>
				)}
			</div>
		</>
	);
};