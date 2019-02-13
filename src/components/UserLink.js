import React from 'react';

export default function UserLink( { user } ) {
	return <a className="UserLink" href={ 'https://profiles.wordpress.org/' + user }>
		@{ user }
	</a>;
}