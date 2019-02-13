import React, { Component } from 'react';
import moment from 'moment';

import FormattedText from './FormattedText';
import Avatar from './Avatar';
import UserLink from './UserLink';
import Label from './Label';

import './TicketProperties.css';

class TicketProperties extends Component {
	getStatusLabel = ( status, resolution ) => {
		if ( status === 'closed' ) {
			if ( resolution === 'fixed' ) {
				return <Label type="status" value={resolution} icon="check-circle" />;
			}
			return <Label type="status" value={resolution} icon="times-circle" />;
		}
		return <Label type="status" value={status} />;
	}
	getAssigned = ( user ) => {
		if ( user ) {
			return (
				<div className="ticket-assignee">
					<div className="property-label">Owned by: </div>
					<div className="property-value">
						<Avatar user={user} />
						<UserLink user={user} />
					</div>
				</div>
			);
		}
		return <div className="ticket-assignee unassigned"><div className="property-label">Owned by: </div></div>
	}
	parseTerms = ( terms, type ) => {
		return terms.map( ( term ) => <span className={type}>{term}</span> );
	}
	render() {
		const {
			component,
			created,
			description, 
			focuses, 
			keywords,
			milestone, 
			updated,
			owner,
			priority,
			reporter,
			resolution,
			severity,
			summary,
			status,
			ticket_type,
			version } = this.props.ticket;
		return (
			<div className="ticket-properties">
				<div className="flex ticket-header">
					<h2>
						<span className="ticket-number">#{this.props.ticket._id}</span> – <span>{summary}</span>
					</h2>
					{/* <div className="ticket-trac-link"><a href={link} className="btn trac-link">View on Trac <i className="fas fa-external-link-alt"></i></a></div> */}
				</div>
				<div className="flex ticket-subheader">
					<div className="ticket-status">{this.getStatusLabel( status, resolution )}</div>
					<div className="ticket-type"><Label type="ticket_type" value={ticket_type} /></div>
					<div className="dates">
						<div className="ticket-created">Opened {moment(created).fromNow()}</div>
						<div className="ticket-updated">Last Updated {moment(updated).fromNow()}</div>
					</div>
				</div>
				<div className="flex ticket-people">
					<div className="ticket-reporter">
						<div className="property-label">Reported by: </div>
						<div className="property-value">
							<Avatar user={reporter} />
							<UserLink user={reporter} />
						</div>
					</div>
					{this.getAssigned( owner )}
				</div>
				<div className="flex ticket-taxonomy">
					<div className="ticket-milestone">
						<div className="property-label">Milestone:</div>
						<div className="property-value">{milestone}</div>
					</div>
					<div className="ticket-priority">
						<div className="property-label">Priority:</div>
						<div className="property-value">{priority}</div>
					</div>
					<div className="ticket-severity">
						<div className="property-label">Severity:</div>
						<div className="property-value">{severity}</div>
					</div>
					<div className="ticket-version">
						<div className="property-label">Version:</div>
						<div className="property-value">{version}</div>
					</div>
					<div className="ticket-component">
						<div className="property-label">Component:</div>
						<div className="property-value">{component}</div>
					</div>
					<div className="ticket-keywords">
						<div className="property-label">Keywords:</div>
						<div className="property-value">{this.parseTerms( keywords, 'keyword' )}</div>
					</div>
					<div className="ticket-focuses">
						<div className="property-label">Focuses:</div>
						<div className="property-value" >{this.parseTerms( focuses, 'focus' )}</div>
					</div>
				</div>
				<div className="ticket-description">
					<h3>Description:</h3>
					<FormattedText text={description} context={this.props.ticket_id} />
				</div>
			</div>
		);
	}
}

export default TicketProperties;