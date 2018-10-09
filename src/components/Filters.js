import React, { Component } from 'react';
import { DateRange, DataSearch, MultiList, MultiDropdownList, SingleDropdownList, ToggleButton } from '@appbaseio/reactivesearch';

import './Filters.css';
class Filters extends Component {
	render() {
		return (
			<div className="filters">
				{/* <MultiList
					className="status"
					componentId="status"
					dataField="status"
					title="Status"
					selectAllLabel="All"
					showSearch={false}
					URLParams
					react={{and:["search","type","focuses","component","milestone"]}}
				/> */}
				<MultiList
					className="filter type"
					componentId="type"
					dataField="ticket_type"
					title="Type:"
					filterLabel="Ticket Type"
					selectAllLabel="All"
					showSearch={false}
					URLParams
					react={{and:["search","status","focuses","component","milestone"]}}
				/>
				<SingleDropdownList
					className="filter milestone"
					componentId="milestone"
					dataField="milestone"
					title="Milestone:"
					filterLabel="Milestone"
					sortBy="desc"
					showSearch
					URLParams
					react={{and:["search","status","type","focuses","component"]}}
				/>
				<SingleDropdownList
					className="filter component"
					componentId="component"
					dataField="component"
					title="Component:"
					filterLabel="Component"
					showSearch
					URLParams
					react={{and:["search","status","type","focuses","milestone"]}}
				/>
				<MultiDropdownList
					className="filter focuses"
					componentId="focuses"
					dataField="focuses"
					title="Focuses:"
					showSearch
					URLParams
					react={{and:["search","satus","type","component","milestone"]}}
				/>
				<DataSearch
					className="filter reporter"
					componentId="reporter"
					dataField="reporter"
					title="Reported by:"
					filterLabel="Reported by"
					placeholder="username"
					autosuggest
					fuzziness={1}
					// react={{and:["component","focuses","milestone","search","status","type"]}}
					URLParams
				/>
				{/* <DateRange
					componentId="created"
					dataField="created"
					title="Opened"
					focused={false}
					numberOfMonths={1}
					readonly={false}
				/> */}
			</div>
		);
	}
}

export default Filters;