import React from 'react';

import Avatar from './Avatar';
import CommentHeading from './CommentHeading';
import FormattedText from './FormattedText';

import './Comment.css';

export default function Comment( props ) {
	const { comment, ticket, time, user } = props;
	return (
		<div className="comment" key={time}>
			<div className="comment-col-avatar">
				<Avatar user={user} />
			</div>
			<div className="comment-col-main">
				<CommentHeading user={user} time={time} />
				<div className="comment-content">
					<FormattedText text={comment} context={{ticket}} />
				</div>
			</div>
		</div>
	);
}
