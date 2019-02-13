import React from 'react';

import TicketProperties from './TicketProperties';
import TicketAttachments from "./TicketAttachments";
import TicketUpdates from "./TicketUpdates";

import './Ticket.css';

export default function Ticket( props ) {
	const { updates, _id, link } = props.ticket;
	return (
		<div className="ticket">
			<a href={link} className="traclink button label color-wpblue">View Ticket on Trac <i class="fas fa-external-link-alt"></i></a>
			<button onClick={props.close} className="close-modal">Close Modal <i className="fas fa-times"></i></button>
			<TicketProperties ticket={props.ticket} />
			{/* <TicketAttachments attachments={props.updates} /> */}
			{ ( updates ) ? <TicketUpdates updates={updates} ticket={_id} /> : null }
		</div>
	);
}
