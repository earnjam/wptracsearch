import React, { Component } from 'react';

class TicketAttachments extends Component {
	getAllAttachmentLinks( updates ) {
		const attachments = updates.reduce( ( attachments, updates ) => { console.log(updates); attachments.concat(updates.link) } );
		console.log(attachments);
		return '';
	}
	render() {
		const { updates } = this.props;
		return (
			<div className="ticket-attachments">
				<ul>
					{this.getAllAttachmentLinks}
				</ul>
			</div>
		);
	}
}

export default TicketAttachments;