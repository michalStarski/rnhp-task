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
		this.setState({ loading: true });
		const randomOption = ["shibes", "cats", "birds"][
			Math.floor(Math.random() * 3)
		];
		const data = this.state;
		delete data.loading;
		delete data.picUrls;
		axios({
			method: "get",
			url: `http://shibe.online/api/${
				data.animal === "random" ? randomOption : data.animal
			}?count=${data.picCount}`,
		})
			.then(response => {
				console.log(response.data);
				this.setState({ picUrls: response.data, loading: false });
			})
			.catch(error => {
				this.setState({ loading: false });
				alert(error);
				throw new Error(error);
			});
	}

	render() {
		return (
			<React.Fragment>
				<div className="inputs">
					<h1>Wyszukiwarka zwierzaków</h1>
					<Form
						picCountVal={this.state.picCount}
						animalVal={this.state.animal}
						onChange={this.formChangeHandler}
						onSubmit={this.submitFormHandler}
						loading={this.state.loading}
					/>
				</div>
				{this.state.loading ? (
					<span>Ładowanie danych ...</span>
				) : (
					<div className="picture-wrapper">
						{(this.state.picUrls || []).map((url, index) => (
							<Picture key={index} url={url} />
						))}
					</div>
				)}
			</React.Fragment>
		);
	}
}

module.exports = App;
