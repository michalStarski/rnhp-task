const React = require("react");

const Form = props => {
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
				value={props.picCountVal}
			/>
			<label htmlFor="animal-type">Typ zwierzaka</label>
			<select
				onChange={event => props.onChange("animal", event.target.value)}
				name="animal"
				id="animal-type"
				value={props.animalVal}
			>
				<option value="shibes">Psy</option>
				<option value="cats">Koty</option>
				<option value="birds">Ptaki</option>
				<option value="random">Losowe</option>
			</select>
			<button disabled={props.loading} type="submit">
				Szukaj
			</button>
		</form>
	);
};

module.exports = Form;
