import React from 'react';

export default ( { user } ) => (
	<a className="UserLink" href={ 'https://profiles.wordpress.org/' + user }>
		@{ user }
	</a>
);