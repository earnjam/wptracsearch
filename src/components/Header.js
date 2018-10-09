import React, { Component } from 'react';
import Filters from './Filters';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}
	toggleVisibility = () => {
		const visible = !this.state.visible;
		this.setState({
			visible,
		});
	}
	render() {
		return (
			<div className="sidebar">
				<h1 className="title logo">WPtracSearch <span className="beta">(beta)</span></h1>
				{/* <div className="btn toggle-btn" onClick={this.toggleVisibility}>Toggle Filters</div> */}
				<Filters visible={this.state.visible} />
			</div>
		);
	}
}

export default Header;