import React, { Component } from 'react';
import ReactDataGrid from  'react-data-grid' ;
import './DataGrid.css';

class IncidentDetails extends Component {
    render() {
	var _rows = [];
	for (var i = 1; i < 4; i++) {
	    _rows.push(
		{
		    id: i,
		    incident_id: 1,
		    //event_time: moment().format('MMMM Do YYYY, h:mm:ss a'),
		    event_time: '04:10:00',
		    //event_type: 'DISPATCH_MESSAGE_SENT|FAULT_FOUND|LINE_ISOLATED|LINE_OPEN|RESOLVED|IN_PROGRESS',
		    event_type: 'D',
		    agent_type: 'GARDA',
		    dispatcher_remarks: 'Email sent to garda_pat@garda.ie',
		}

	    );
	}
	
	// A rowGetter function is required by the grid to retrieve a row for a given index
	var rowGetter = function(i){
	    return _rows[i];
	};

	var columns = [
	    {
		key: 'event_time',
		name: 'Time',
		resizable : true,
		width : 10
	    },
	    {
		key: 'event_type',
		name: 'Type',
		resizable : true,
	    },
	    {
		key: 'agent_type',
		name: 'Agency',
		resizable : true,

	    },
	    {
		key: 'dispatcher_remarks',
		name: 'Dispatcher remarks',
		resizable : true,
	    }
	];
	
	return (
	    <div>
		<h3 className="componentHeader">Status Updates</h3>
		<ReactDataGrid columns={columns}
			       rowGetter={rowGetter}
			       rowsCount={_rows.length}
			       minHeight={301}
			       minWidth={600}
		/>
	    </div>
	    
	);
    };
}
export default IncidentDetails;
 		
