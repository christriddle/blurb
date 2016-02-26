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
		return (<CornerTypeRadioGroup selectedCorner={"foo"} />);
	}
});

var CornerTypeRadioGroup = React.createClass({
	onSquareChange: function(e) {
		console.log(this.props)
		this.props.selectedCorner("square");
	},
	onRoundedChange: function(e) {
		this.props.selectedCorner("rounded");
	},
	render: function() {
		return (<div>
			<p>Corner type</p>
			<label htmlFor="square">Square</label><input onChange={ this.onSquareChange } type="radio" value="square" id="square" name="corner-group" />
			<label htmlFor="rounded">Rounded</label><input onChange={ this.onRoundedChange } type="radio" value="rounded" id="rounded" name="corner-group" />
		</div>);
	}
});

module.exports = ActionPanel;
module.exports = CornerTypeRadioGroup;