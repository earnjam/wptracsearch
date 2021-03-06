import React from 'react';
import { DataSearch, MultiList, MultiDropdownList, SingleDropdownList } from '@appbaseio/reactivesearch';

import './Filters.css';

export default function Filters() {
	return (
		<div className="filters flex column">
			<MultiList
				className="filter type"
				componentId="type"
				dataField="ticket_type"
				title="Type:"
				filterLabel="Ticket Type"
				selectAllLabel="All"
				showSearch={false}
				URLParams
				react={{and:["search","status","focuses","component","milestone","keywords"]}}
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
				react={{and:["search","status","type","focuses","component","keywords"]}}
			/>
			<SingleDropdownList
				className="filter component"
				componentId="component"
				dataField="component"
				title="Component:"
				filterLabel="Component"
				showSearch
				URLParams
				react={{and:["search","status","type","focuses","milestone","keywords"]}}
			/>
			<MultiDropdownList
				className="filter focuses"
				componentId="focuses"
				dataField="focuses"
				title="Focuses:"
				showSearch
				URLParams
				react={{and:["search","satus","type","component","milestone","keywords"]}}
			/>
			<MultiDropdownList
				className="filter keywords"
				componentId="keywords"
				dataField="keywords"
				title="Keywords:"
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
				URLParams
			/>
			<DataSearch
				className="filter owner"
				componentId="owner"
				dataField="owner"
				title="Assigned to:"
				filterLabel="Assigned to"
				placeholder="username"
				autosuggest
				fuzziness={1}
				URLParams
			/>
		</div>
	);
}
