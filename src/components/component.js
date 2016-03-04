'use strict';

var React = require('react');

var radioGroupConfig = [
	{
		"title": "Corner Type",
		"groupName": "cornerType",
		"options": [
			{
				"label": "Square",
				"value": "square"
			},
			{
				"label": "Rounded",
				"value": "rounded"
			}
		]
	},
	{
		"title": "Product Type",
		"groupName": "productType",
		"options": [
			{
				"label": "Business Card",
				"value": "businesscard"
			},
			{
				"label": "Businesscard Square",
				"value": "businesscard_square"
			},
			{
				"label": "Businesscard US",
				"value": "businesscard_us"
			}
		]
	},
	{
		"title": "Element",
		"groupName": "elementType",
		"options": [
			{
				"label": "Gold Foil",
				"value": "foil_gold"
			},
			{
				"label": "Raised Spot Gloss",
				"value": "spot_uv_3d"
			},
			{
				"label": "Spot Gloss",
				"value": "spot_uv_2d"
			}
		]
	}

]

var ActionPanel = React.createClass({
	onChange: function(groupName, value) {
		var state = {};
		state[groupName] = value;
		this.setState(state);
	},
	getInitialState: function() {
		return {
			"cornerType": "square",
			"productType": "businesscard",
			"elementType": "foil_gold"
		};
	},
	render: function() {
		return (
			<div>
				{
					radioGroupConfig.map(function(group, i) {
						return (
							<RadioGroup key={i} title={group.title} groupName={group.groupName} selected={this.state[group.groupName]} options={group.options}
					onChange={this.onChange}
				/>
						);
					}, this)
				}
				
 				<ConsolePanel cornerType={this.state.cornerType} productType={this.state.productType} elementType={this.state.elementType}/>
			</div>
		)
	}
});

var RadioGroup = React.createClass({

	onChange: function(e) {
		this.props.onChange(this.props.groupName, e.target.value);
	},

	render: function() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				{this.props.options.map(function (option, i) {
					return (
						<div key={i}>
							<label htmlFor={option.value}>{option.label}</label>
							<input id={option.value} type="radio" name={this.props.groupName} value={option.value} onChange={this.onChange} checked={this.props.selected == option.value}/>
						</div>
					)
				}, this)}
			</div>
		)
	}
});

var ConsolePanel = React.createClass({
	render: function() {
		return (
			<div>
				<ul>
					<li>
						{this.props.productType}
					</li>
					<li>
						{this.props.elementType}
					</li>
					<li>
						{this.props.cornerType}
					</li>
				</ul>
			</div>
		)
	}
});

module.exports = ActionPanel