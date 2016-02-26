'use strict';

var React = require('react');

var ActionPanel = React.createClass({
	getInitialState: function() {
		console.log('hello');
		return {
			selectedCorner: "square"
		};
	},
	selectedCorner: function(selected) {
		this.state.selectedCorner = selected;
        console.log(this.state.selectedCorner);
	},
	render: function() 		{	
		return (<CornerTypeRadioGroup selectedCorner={this.selectedCorner} />);
	}
});

var CornerTypeRadioGroup = React.createClass({
	render: function() {
		return (<div>
			<p>Corner type</p>
			<label htmlFor="square">Square</label><input onChange={ this.props.selectedCorner.bind(null, "square") } type="radio" value="square" id="square" name="corner-group" />
			<label htmlFor="rounded">Rounded</label><input onChange={ this.props.selectedCorner.bind(null, "rounded") } type="radio" value="rounded" id="rounded" name="corner-group" />
		</div>);
	}
});

module.exports = ActionPanel;
