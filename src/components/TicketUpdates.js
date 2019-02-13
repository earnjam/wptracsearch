import React, { Component } from 'react';

import Comment from './Comment';
import Update from './Update';
import UserLink from './UserLink';
import Time from './Time';
import Label from './Label';

import './TicketUpdates.css';

class TicketUpdates extends Component {
	determineFileType( link ) {
		const linkParts = link.split( '.' );
		const extension = linkParts.pop();
		switch ( extension ) {
			case 'diff':
			case 'patch':
				return 'patch';
			case 'jpg':
			case 'png':
			case 'gif':
				return 'image';
			default:
				return 'file';
		}
	}
	getFileName( link ) {
		const linkParts = link.split( '/' );
		return linkParts.pop();
	}
	getRawAttachmentLink( link ) {
		let parts = link.split( '/' );
    	parts[3] = 'raw-attachment';
    	return parts.join('/');
	}
	parseUpdate = ( update ) => {
		const { comment, comment_id, link, time, user } = update;
		const type = update.update_type;
		const key = time + type;
		const oldval = update.previous;
		const newval = update.new;
		// Don't include edits
		if ( type.indexOf( '_comment' ) === 0 ) return;

		switch ( type ) {
			case 'comment':
				if (! comment) return;
				return <Comment 
					comment={comment}
					id={comment_id}
					ticket={this.props.ticket}
					time={time}
					user={user}
					key={key}
				/>;
			case 'cc':
				return null;
			case 'attachment':
				const filetype = this.determineFileType( link );
				switch ( filetype ) {
					case 'patch':
						return <Update key={key} update={update}>
								<UserLink user={user} /> uploaded a patch <Time time={time} />: <a href={link}>{this.getFileName( link )}</a>
							</Update>
					case 'image':
						return <Update key={key} update={update}>
								<UserLink user={user} /> uploaded an image <Time time={time} />: <br /><img src={this.getRawAttachmentLink(link)} />
							</Update>
					default:
						return <Update key={key} update={update}>
								<UserLink user={user} /> uploaded a file <Time time={time} />: <a href={link}>{this.getFileName( link )}</a>
							</Update>
				}
			case 'owner':
				let text;
				switch( true ) {
					case ! oldval && newval === user:
						text = <Update key={key} update={update}>
								<UserLink user={ user } /> self-assigned this <Time time={time} />
							</Update>;
						break;

					case oldval === user && ! newval:
						text = <Update key={key} update={update}>
								<UserLink user={ user } /> removed their assignment <Time time={time} />
							</Update>;
						break;

					case ! newval && oldval:
						text = <Update key={key} update={update}>
								<UserLink user={ user } /> was unassigned by <UserLink user={ user } /> <Time time={time} />
							</Update>;
						break;

					case newval && ! oldval:
						text = <Update key={key} update={update}>
								<UserLink user={ newval } /> was assigned by <UserLink user={ user } /> <Time time={time} />
							</Update>;
						break;

					default:
						text = <Update key={key} update={update}>
								<UserLink user={ user } /> assigned <UserLink user={ newval } /> and unassigned <UserLink user={ oldval } /> <Time time={time} />
							</Update>;
						break;
				}
				return text;

			case 'summary':
				return <Update key={key} update={update}>
						<UserLink user={user} /> changed the ticket summary to "{newval}" <Time time={time} />
					</Update>


			case 'keywords':
			case 'focuses':
				const added = newval.filter( tag => oldval.indexOf( tag ) === -1 );
				const removed = oldval.filter( tag => newval.indexOf( tag ) === -1 );
				console.log(added);
				console.log(removed);

				let addText = null;
				let removeText = null;
				let splitLabels = labels => labels.map( label => <Label type={type} value={label} /> );
				if ( added.length > 0 && added[0] !== '' ) {
					addText = <span>added { splitLabels(added) }</span>;
				}
				if ( removed.length > 0 && removed[0] !== '' ) {
					removeText = <span>removed { splitLabels(removed) }</span>;
				}
				return <Update key={key} update={update}>
						<UserLink user={user} />
						{ ' ' }
						{ ( addText && removeText ) ? 
							<span>{ addText } and { removeText }</span>
						: ( addText || removeText ) }
						{ ' ' + type + ' ' }
						<Time time={time} />
					</Update>
			case 'resolution':
				if ( ! newval ) {
					return null;
				} else if ( oldval === '' || oldval === '10' ) {
					return <Update key={key} update={update} className={`closed ${newval}`}>
							<UserLink user={user} /> closed this as <strong>{newval}</strong> <Time time={time} />
						</Update>;
				} else {
					return <Update key={key} update={update}>
							<UserLink user={user} /> changed {type} to <strong>{newval}</strong> <Time time={time} />
						</Update>;
				}
			case 'status':
			case 'type':
			case 'component':
				if ( newval === 'closed' ) {
					return null;
				}
				return <Update key={key} update={update}>
						<UserLink user={user} /> changed {type} from <Label type={type} value={oldval} /> to <Label type={type} value={newval} /> <Time time={time} />
					</Update>;
			default: 
				if ( type === '_comment0' ) return;
				let action;
				if ( ! oldval && newval ) {
					action = <span>added <strong>{ newval }</strong> { type }</span>;
				} else if ( ! newval && oldval ) {
					action = <span>removed <strong>{ oldval }</strong> { type }</span>;
				} else {
					action = <span>changed { type } from <strong>{ oldval }</strong> to <strong>{ newval }</strong></span>;
				}
				return <Update key={key} update={update}>
						<UserLink user={user} /> {action} <Time time={time} />
					</Update>;
		}

	}
	render() {
		const { updates } = this.props;
		return (
			<div className="ticket-updates">
				{ updates.map( update => this.parseUpdate( update ) ) }
			</div>
		);
	}
}

export default TicketUpdates;