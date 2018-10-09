import React, { Component } from 'react';
import Avatar from './Avatar';
import UserLink from './UserLink';
import Time from './Time';
import Label from './Label';

import './TicketListItem.css';
class TicketListItem extends Component {
	getStatusString = ( status ) => {
		if ( status === 'closed' && this.props.ticket.resolution ) {
			return status + ": " + this.props.ticket.resolution;
		}
		return null;
	}
	getSummary = () => {
		return <span>{this.props.ticket.summary} (<em>{this.getStatusString(this.props.ticket.status)}</em>)</span>;
	}
	getDescription = () => {
		let desc = this.props.ticket.description;
		if (this.props.showDesc) {
			if (desc.length > 400) {
				desc = desc.substring(0, 400) + "...";
			}
			return <div className="ticket-description"><p>{desc}</p></div>
		}
		return '';
	}
	getCommentCount = () => {
		let counter = 0;
		const updates = this.props.ticket.updates;
		if ( updates ) {
			updates.forEach(element => {
				const type = element.update_type;
				if( type === 'comment' ) {
					counter += 1;
				}
			});
		}
		if ( counter ) {
			return ( <div className="comment-count"><i className="far fa-comment"></i> {counter}</div>);
		}
	}
	getTicketIcon( status, resolution ) {
		if ( status === 'closed' ) {
			if ( resolution === 'fixed' ) {
				return <i className="green far fa-check-circle"></i>
			} else {
				return <i className="red far fa-times-circle"></i>;
			}
		}
		return <i className="blue far fa-flag"></i>
	}
	openTicket = (e) => {
		e.preventDefault();
		this.props.showTicket( this.props.ticket );
	}
	render() {
		const { _id, owner, status, created, link, updated, reporter, resolution, ticket_type, component } = this.props.ticket;
		const divider = " | "
		return (
			<div className={ `ticket-list-item ticket-${_id}` }>
				<div className="ticket-icon">
					{this.getTicketIcon( status, resolution )}
				</div>
				<div className="ticket-content">
					<div className="flex ticket-heading">
						<div className="primary ticket-summary">
							<a className="ticket-link" href={link} onClick={this.openTicket}>{this.getSummary()}</a>
						</div>
						<div className="flex secondary">
							{this.getCommentCount()}
							{ ( owner ) ? <Avatar user={owner} size={20}/> : null }
						</div>
					</div>
					<div className="flex ticket-meta">
						<div className="primary">
							<span className="ticket-number">#{_id}</span>{divider} Opened <Time time={created} className="created" /> by <UserLink className="reporter" user={reporter} />
							<Label type='ticket-type' value={ticket_type} />
							<Label type='component' value={component} />
						</div>
						<div className="secondary">
							<div className="ticket-updated">Updated <Time time={updated} className="updated" /></div>
						</div>
					</div>
					{this.getDescription()}
				</div>
			</div>
		);
	}
}

export default TicketListItem;