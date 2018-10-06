const React = require("react");
const Form = require("./Form");
const axios = require('axios');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			picCount: 1,
			animal: "shibes",
			loading: false,
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
		const data = this.state;
		delete data.loading;
		this.setState({ loading: true });
		axios({
			method: "get",
			url: `http://shibe.online/api/${data.animal}?count${data.picCount}`,
		})
			.then(response => {
				alert(response);
			})
			.catch(error => {
				alert(error);
			})
			.then(response => console.log(response[0]))
	}

	render() {
		return (
			<div>
				<h1>Wyszukiwarka zwierzaków</h1>
				<Form
					picCountVal={this.state.picCount}
					animalVal={this.state.animal}
					onChange={this.formChangeHandler}
					onSubmit={this.submitFormHandler}
				/>
			</div>
		);
	}
}

module.exports = App;
