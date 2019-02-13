import React from 'react';
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

const getIcon = icon => {
	return ( icon ) ? <i className={ `fas fa-${icon}` }></i> : '';
}

export default function Label ( { type, value, icon } ) {
	return <span className={ `label ${type} ${value} color-${getColor(value)}` }>{getIcon(icon)}{value}</span>;
}