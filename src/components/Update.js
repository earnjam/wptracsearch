import React, { Component } from 'react';
import UpdateIcon from './UpdateIcon';

import './Update.css';

export default ( { children, update, className } ) => (
	<div className={`update ${ update.update_type } ${ className }`}>
		<UpdateIcon update={update} />
		{ children }
	</div>
);