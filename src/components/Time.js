import React from 'react';
import moment from 'moment';

export default function Time( { time, className } ) {
	return <span className={ `timestamp ${ className }` }>
		{moment(time).fromNow()}
	</span>;
}