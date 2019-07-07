function TableDrag(options){
	//will need a way to tie event listeners to rows/columns/cells
	//will need to handle a object or array for column headers and row content in case event listeners need to be tied to them
	this.defaultOptions = {
		tableContainer:"TableDrag",
		columnHeaders:["column1","column2","column3","column4"],
		rowContent:{
			row1:["column 1 row1"," column2 row 1"," column3 row 1"," column4 row 1"],
			row2:["column 1 row 2","column 2 row 2","column 3 row 2","column 4 row 2"],
			row3:["column 1 row 3","column 2 row 3","column 3 row 3","column 4 row 3"],
			row4:["column 1 row 4","column 2 row 4","column 3 row 4","column 4 row 4"]
		}
	};

	if(!options){
		this.handleErrors("No options passed");
		this.options = this.defaultOptions;
	}
	else{
		this.options = this.mapOptions(options);
	}
	
	console.log(this.options);
}

TableDrag.prototype.buildTable = function() {
	
};

TableDrag.prototype.mapOptions = function(options) {
	let newOptions = {};

	newOptions.tableContainer = options.tableContainer ? options.tableContainer : this.defaultOptions.tableContainer;
	newOptions.columnHeaders = options.columnHeaders ? options.columnHeaders : this.defaultOptions.columnHeaders;
	newOptions.rowContent = options.rowContent ? options.rowContent : this.defaultOptions.rowContent;
	newOptions.columns = newOptions.columnHeaders.length;
	newOptions.rows =Object.keys(newOptions.rowContent).length;

	return newOptions;
};

TableDrag.prototype.handleErrors = function(errorMessage) {
	switch(errorMessage){
		case 1:
			break;
		default:
			console.log("Table Drag Error: ",errorMessage);
	}
};