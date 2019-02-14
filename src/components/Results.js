import React from 'react';
import { ReactiveList, ToggleButton } from '@appbaseio/reactivesearch';

import TicketListItem from './TicketListItem';

import './Results.css';

export default function Results( props ) {
	return (
		<div className="result-list">
			<div className="description-toggle" onClick={props.toggleDesc}><i className="fas fa-list" /></div>
			<ToggleButton
				className="status-toggle"
				componentId="status"
				dataField="status"
				showFilter={false}
				data={
					[
					{"label": "All", "value": "all"},
					{"label": "Open", "value": "open"},
					{"label": "Closed", "value": "closed"}]
				}
				defaultSelected="all"
				multiSelect={false}
				customQuery={
					function(value, props) {
						if ( ! value[0] ) return;
						if ( value[0].value === 'closed' ) {
							console.log('Closed!');
							return {
								term: {
									status: "closed"
								}
							}
						} else if ( value[0].value === 'open' ) {
							console.log('Open!');
							return {
								terms: {
									status: ["new","assigned","reopened","reviewing","accepted"]
								}
							}
						}
					}
				} />
			<ReactiveList
				className="ticket-list"
				dataField="_score"
				componentId="SearchResults"
				from={0}
				size={20}
				react={{and:["component", "focuses", "milestone", "owner", "reporter", "search", "status", "type"]}}
				onData={(data) => <TicketListItem showTicket={props.showTicket} ticket={data} key={data._id} showDesc={props.showDesc} /> }
				URLParams
				pagination
				sortOptions={[
				{
					label: 'Best Match',
					dataField: '_score',
					sortBy: 'desc',
				},
				{
					label: 'Most Recently Updated',
					dataField: 'updated',
					sortBy: 'desc',
				},
				{
					label: 'Least Recently Updated',
					dataField: 'updated',
					sortBy: 'asc',
				},
				{
					label: 'Newest Tickets',
					dataField: 'created',
					sortBy: 'desc'
				},
				{
					label: 'Oldest Tickets',
					dataField: 'created',
					sortBy: 'asc'
				}
				]}
				innerClass={{
					resultsInfo: 'results-header',
					resultStats: 'query-stats',
					sortOptions: 'sortby',
					pagination: 'pagination',
					button: 'button'
				}}
			/>
		</div>
	);
}
