import React, { Component } from 'react';
import ReactDataGrid from  'react-data-grid' ;
import './Map.css';

class IncidentDetails extends Component {
    render() {
	var _rows = [];
	for (var i = 1; i < 8; i++) {
	    _rows.push({
		id: i,
		title: 'Title ' + i,
		count: i * 1000
	    });
	}
	
	//A rowGetter function is required by the grid to retrieve a row for a given index
	var rowGetter = function(i){
	    return _rows[i];
	};


	var columns = [
	    {
		key: 'id',
		name: 'ID'
	    },
	    {
		key: 'title',
		name: 'Title'
	    },
	    {
		key: 'count',
		name: 'Count'
	    }
	];
	console.log(columns);
	console.log(_rows);
	
	return (
		<ReactDataGrid
	    columns={columns}
	    rowGetter={rowGetter}
	    rowsCount={_rows.length}
	    minHeight={500} />

	);
    };
}
export default IncidentDetails;
 		
