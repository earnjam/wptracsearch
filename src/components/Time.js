import React, { Component } from 'react';
import moment from 'moment';

export default ( { time, className } ) => (
	<span className={ `timestamp ${ className }` }>
		{moment(time).fromNow()}
	</span> 
);