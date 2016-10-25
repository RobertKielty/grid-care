import React, { Component } from 'react';
import ReactDataGrid from  'react-data-grid' ;
import './DataGrid.css';

class Personel extends Component {
    render() {
	var _rows = [
	    {
		"longitude": "111.030056",
		"latitude": "33.297758",
		"address": "981 Bogart Street, Bascom, Louisiana, 4604",
		"phone": "+1 (851) 446-3182",
		"email": "pena.daniel@yogasm.org",
		"company": "YOGASM",
		"name": {
		    "last": "Daniel",
		    "first": "Pena"
		},
		"picture": "http://placehold.it/32x32",
		"isActive": true,
		"guid": "5e4f58ae-6a88-43be-b82d-649c2212ed38",
		"index": 0,
		"_id": "580e9d2c87f76c0e98a50814"
	    },
	    {
		"longitude": "-99.353455",
		"latitude": "8.904171",
		"address": "895 Flatbush Avenue, Dixonville, Kentucky, 2085",
		"phone": "+1 (869) 411-3667",
		"email": "silva.scott@geologix.info",
		"company": "GEOLOGIX",
		"name": {
		    "last": "Scott",
		    "first": "Silva"
		},
		"picture": "http://placehold.it/32x32",
		"isActive": false,
		"guid": "045ba4ca-9492-4c6b-848f-8604efea2de8",
		"index": 1,
		"_id": "580e9d2c4ad7d5375a5c0f6a"
	    },
	    {
		"longitude": "-163.005152",
		"latitude": "32.209082",
		"address": "708 Fiske Place, Hampstead, Washington, 2184",
		"phone": "+1 (827) 472-2462",
		"email": "graves.mooney@jetsilk.me",
		"company": "JETSILK",
		"name": {
		    "last": "Mooney",
		    "first": "Graves"
		},
		"picture": "http://placehold.it/32x32",
		"isActive": true,
		"guid": "34ca55dd-07ec-4a6e-be47-2752527fa5c9",
		"index": 2,
		"_id": "580e9d2c9d7ffd18b8fe6681"
	    },
	    {
		"longitude": "115.954478",
		"latitude": "30.777047",
		"address": "433 Wolcott Street, Limestone, Pennsylvania, 3680",
		"phone": "+1 (984) 533-2892",
		"email": "marks.pittman@billmed.net",
		"company": "BILLMED",
		"name": {
		    "last": "Pittman",
		    "first": "Marks"
		},
		"picture": "http://placehold.it/32x32",
		"isActive": false,
		"guid": "fa37e4f6-cf1c-4a15-9bb8-2669ef9af53c",
		"index": 3,
		"_id": "580e9d2c90dcd53e23d21f13"
	    },
	    {
		"longitude": "-100.305638",
		"latitude": "-63.107504",
		"address": "492 Bethel Loop, Fairhaven, Puerto Rico, 9226",
		"phone": "+1 (929) 463-3669",
		"email": "sharp.england@entogrok.io",
		"company": "ENTOGROK",
		"name": {
		    "last": "England",
		    "first": "Sharp"
		},
		"picture": "http://placehold.it/32x32",
		"isActive": true,
		"guid": "489d56af-529e-4402-b41d-b36706c1f747",
		"index": 4,
		"_id": "580e9d2c1e327d46a9c41197"
	    },
	    {
		"longitude": "65.268954",
		"latitude": "-58.245593",
		"address": "214 Tennis Court, Watrous, New York, 7157",
		"phone": "+1 (979) 567-2789",
		"email": "buchanan.pitts@recrisys.biz",
		"company": "RECRISYS",
		"name": {
		    "last": "Pitts",
		    "first": "Buchanan"
		},
		"picture": "http://placehold.it/32x32",
		"isActive": true,
		"guid": "1587c60b-8daf-49b9-a589-8e5f8a5931c1",
		"index": 5,
		"_id": "580e9d2cf9bc40ffd5705248"
	    }
	];
	
	// A rowGetter function is required by the grid to retrieve a row for a given index
	var rowGetter = function(i){
	    return _rows[i];
	};

	var columns = [
	    {
		key: '_id',
		name: 'ID',
		resizable : true,
		hidden: true
	    },
	    {
		key: 'index',
		name: 'ID',
		resizable : true,
	    },

	    {
		key: 'name',
		name: 'Name',
		resizable : true,
	    },
	];
	
	return (
	    <div>
		<h3 className="componentHeader">Incident Personel</h3>
		<ReactDataGrid columns={columns}
			       rowGetter={rowGetter}
			       rowsCount={_rows.length}
			       minHeight={250}
		/>
	    </div>
	    
	);
    };
}
export default Personel;

