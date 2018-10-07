const React = require("react");
const Form = require("./Form");
const axios = require("axios");
const Picture = require("./Picture");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			picCount: 1,
			animal: "shibes",
			loading: false,
			picUrls: [],
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
		delete data.picUrls;
		this.setState({ loading: true });
		axios({
			method: "get",
			url: `http://shibe.online/api/${data.animal}?count=${
				data.picCount
			}`,
		})
			.then(response => {
				console.log(response.data);
				this.setState({ picUrls: response.data });
			})
			.catch(error => {
				alert(error);
				throw new Error(error);
			})
			.then(() => this.setState({ loading: false }));
	}

	render() {
		return (
			<React.Fragment>
				<h1>Wyszukiwarka zwierzaków</h1>
				<Form
					picCountVal={this.state.picCount}
					animalVal={this.state.animal}
					onChange={this.formChangeHandler}
					onSubmit={this.submitFormHandler}
				/>
				{this.state.loading ? (
					<span>Ładowanie danych ...</span>
				) : (
					<div className="picture-wrapper">
						{(this.state.picUrls || []).map(url => (
							<Picture url={url} />
						))}
					</div>
				)}
			</React.Fragment>
		);
	}
}

module.exports = App;
