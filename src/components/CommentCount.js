import React from 'react';

function numComments( updates ) {
	let counter = 0;
	if ( updates ) {
		updates.forEach(element => {
			const type = element.update_type;
			if ( type === 'comment' ) {
				counter += 1;
			}
		});
	}
	return counter;
}

function CommentCount( props ) {
	const count = numComments( props.updates );
	if ( count ) {
		return <div className="comment-count"><i class="far fa-comment"></i> {count}</div>
	}
	return;
}

export default CommentCount;