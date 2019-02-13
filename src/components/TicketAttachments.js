import React, { Component } from 'react';

class TicketAttachments extends Component {
	getAllAttachmentLinks( updates ) {
		// @todo parse through updates to pull out attachment links
		return '';
	}
	render() {
		const { updates } = this.props;
		return (
			<div className="ticket-attachments">
				<ul>
					{this.getAllAttachmentLinks( updates )}
				</ul>
			</div>
		);
	}
}

export default TicketAttachments;