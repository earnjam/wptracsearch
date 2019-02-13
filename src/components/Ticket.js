import React from 'react';

import TicketProperties from './TicketProperties';
import TicketAttachments from "./TicketAttachments";
import TicketUpdates from "./TicketUpdates";

import './Ticket.css';

export default function Ticket( props ) {
	const { updates, _id } = props.ticket;
	return (
		<div className="ticket">
			<button onClick={props.close} className="close-modal"><i className="fas fa-times"></i></button>
			<TicketProperties ticket={props.ticket} />
			{/* <TicketAttachments attachments={props.updates} /> */}
			{ ( updates ) ? <TicketUpdates updates={updates} ticket={_id} /> : null }
		</div>
	);
}
