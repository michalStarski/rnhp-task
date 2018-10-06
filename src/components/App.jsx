const React = require("react");
const Form = require("./Form");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			picCount: 0,
			animal: "shibas",
		};
		this.formChangeHandler = this.formChangeHandler.bind(this);
		this.submitFormHandler = this.submitFormHandler.bind(this);
	}

	formChangeHandler(state, val) {
		this.setState({
			[state]: val,
		});
	}

	submitFormHandler(event) {
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<h1>Wyszukiwarka zwierzaków</h1>
				<Form
					onChange={this.formChangeHandler}
					onSubmit={this.submitFormHandler}
				/>
			</div>
		);
	}
}

module.exports = App;
