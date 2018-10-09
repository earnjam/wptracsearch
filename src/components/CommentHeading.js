import React, { Component } from 'react';
import moment from 'moment';
import UserLink from './UserLink';

import './CommentHeading.css';

export default function CommentHeading( { user, time } ) {
	return (
		<div className="comment-heading">
			<UserLink user={user}/> commented <span className="time">{moment(time).fromNow()}</span>
		</div>
	);
}