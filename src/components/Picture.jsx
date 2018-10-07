const React = require("react");

const Picture = props => {
	return <img className="animal" src={props.url} alt="animal_image" />;
};

module.exports = Picture;
