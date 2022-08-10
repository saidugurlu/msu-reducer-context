export const ItemButtonArea = ({ item, dispatch }) => {
	return (
		<>
			<div className="buttonArea">
				{!item.isEditing && (
					<>
						<button
							onClick={() =>
								dispatch({
									type: 'toggleEditStatus',
									payload: item,
								})
							}
						>
							Edit
						</button>
						<button>Delete</button>
						<button>Add</button>
					</>
				)}
				{item.isEditing && (
					<>
						<button
							onClick={() =>
								dispatch({
									type: 'cancelEditStatus',
									payload: { item },
								})
							}
						>
							Cancel
						</button>
                        <button>Save</button>
					</>
				)}
			</div>
		</>
	);
};