const React = require("react");

module.exports = props => {
	return (
		<form onSubmit={props.onSubmit} className="form">
			<label htmlFor="pic-count">Ilość zdjęć</label>
			<input
				onChange={event =>
					props.onChange("picCount", event.target.value)
				}
				max="10"
				min="1"
				type="number"
				id="pic-count"
			/>
			<label htmlFor="animal-type">Typ zwierzaka</label>
			<select
				onChange={event => props.onChange("animal", event.target.value)}
				name="animal"
				id="animal-type"
			>
				<option value="shibas">Psy</option>
				<option value="cats">Koty</option>
				<option value="birds">Ptaki</option>
				<option value="random">Losowe</option>
			</select>
			<button type="submit">Szukaj</button>
		</form>
	);
};
