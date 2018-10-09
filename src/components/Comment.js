import React, { Component } from 'react';
import Avatar from './Avatar';
import CommentHeading from './CommentHeading';
import FormattedText from './FormattedText';

import './Comment.css';

class Comment extends Component {
	render() {
		const { comment, id, ticket, time, user } = this.props;
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
}

export default Comment;