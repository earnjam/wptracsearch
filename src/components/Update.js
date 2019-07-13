import React from 'react';

import UpdateIcon from './UpdateIcon';

import './Update.css';

export default function Update( { children, update, className } ) {
	return <div className={`update ${ update.update_type } ${ className }`}>
		<UpdateIcon update={update} />
		<div className={`update-content`}>
			{ children }
		</div>
	</div>;
}
