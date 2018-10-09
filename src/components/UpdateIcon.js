import React from 'react';

export default function( { update } ) {
	switch( update.update_type ){
		case 'attachment':
			return <i className="fas fa-upload"></i>;
		case 'cc':
			return <i className="fas fa-at"></i>
		case 'milestone':
			return <i className="fas fa-map-signs"></i>;
		case 'owner':
			return <i className="fas fa-user"></i>
		case 'resolution':
			if ( update.new === 'fixed' ) {
				return <i className="fas fa-check"></i>;
			}
			return <i className="fas fa-times"></i>
		case 'severity':
			return <i className="fas fa-exclamation-circle"></i>
		default:
			return <i className="fas fa-tag"></i>;
	}
}
