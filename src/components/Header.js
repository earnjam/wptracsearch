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
					<h1 className="logo">WPTracSearch</h1>
					<div className="btn toggle-btn" onClick={this.toggleVisibility}><i className="fas fa-filter"></i></div>
				</div>
				<Filters visible={this.state.visible} />
			</div>
		);
	}
}

export default Header;
