import React, { Component } from 'react';
import TicketProperties from './TicketProperties';
import TicketAttachments from "./TicketAttachments";
import TicketUpdates from "./TicketUpdates";

import './Ticket.css';
class Ticket extends Component {
	render() {
		const { updates, _id } = this.props.ticket;
		return (
			<div className="ticket">
				<button onClick={this.props.close} className="close-modal"><i className="fas fa-times"></i></button>
				<TicketProperties ticket={this.props.ticket} />
				<TicketAttachments attachments={this.props.updates} />
				{ ( updates ) ? <TicketUpdates updates={updates} ticket={_id} /> : null }
			</div>
		);
	}
}

export default Ticket;