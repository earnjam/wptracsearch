import React, { Component } from 'react';

import Filters from './Filters';

import './Header.css';

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
			<div className={ `header ${ (this.state.visible) ? 'expanded' : '' }` }>
				<div className="title">
					<h1 className="logo">WPtracSearch <span className="beta">(beta)</span></h1>
					<div className="btn toggle-btn" onClick={this.toggleVisibility}><i class="fas fa-filter"></i></div>
				</div>
				<p className="subheading">Created by <a href="https://twitter.com/earnjam">William Earnhardt</a><br /><a href="https://github.com/earnjam/wptracsearch">View on GitHub</a></p>
				<Filters visible={this.state.visible} />
			</div>
		);
	}
}

export default Header;