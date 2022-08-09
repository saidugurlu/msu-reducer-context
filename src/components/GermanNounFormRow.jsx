export const GermanNounFormRow = ({item, label, variable}) => {
	return (
		<div className="row">
			<label>{label}</label>
			<div className="value">{item[variable]}</div>
		</div>
	);
};