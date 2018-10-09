import React, { Component } from 'react';
import stringHash from 'string-hash';

import './Label.css';

window.hasher = stringHash;

const COLORS = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'purple',
];

const getColor = name => {
	const hash = stringHash( name );
	const color = COLORS[ hash % COLORS.length ];

	return color;
}

export default ({ type, value }) => <span className={ `label ${type} ${value} color-${getColor(value)}` }>{value}</span>;