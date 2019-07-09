function TableDrag(options){
	//will need a way to tie event listeners to rows/columns/cells
	//will need to handle a object or array for column headers and row content in case event listeners need to be tied to them
	this.defaultOptions = {
		tableContainer:"TableDrag",
		columnHeaders:{
			content:["column1","column2","column3","column4"],
			classes:["test1","test2"]
		},
		rowContent:{
			row1:["column 1 row1"," column2 row 1"," column3 row 1"," column4 row 1"],
			row2:["column 1 row 2","column 2 row 2","column 3 row 2","column 4 row 2"],
			row3:["column 1 row 3","column 2 row 3","column 3 row 3","column 4 row 3"],
			row4:["column 1 row 4","column 2 row 4","column 3 row 4","column 4 row 4"],
			classes:["test1","test2","test3","test4"]
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

	this.buildTable(this.options);
}

TableDrag.prototype.buildHeaders = function(headers,classes) {
	let headerString= "";
	let headerStrings = [];

	let classIndex = 0;
	for(let i = 0;i < headers.length;i++){
		
		headerString += '<th class="' + classes[classIndex] + '">' + headers[i] + '</th>';
		
		if(classIndex < classes.length){
			classIndex++;
		}
		else{
			headerString = headerString.replace(/\s{1}class\=\".*\"/gi,"");
			console.log(headerString);
		}
		headerStrings.push(headerString);
		headerString = "";
	}

	return headerStrings;
};

TableDrag.prototype.tableStructure = function() {
	let table = document.createElement("table");
	let tableHead = document.createElement("thead");
	let tableBody = document.createElement("tbody");

	return {table,tableHead,tableBody};
};

TableDrag.prototype.buildTable = function(tableOptions) {
	const tableLayout = this.tableStructure();
	const headerStrings = this.buildHeaders(tableOptions.columnHeaders.content,tableOptions.columnHeaders.classes);
	console.log(headerStrings);
};

TableDrag.prototype.mapOptions = function(options) {
	let newOptions = {};

	newOptions.tableContainer = options.tableContainer ? options.tableContainer : this.defaultOptions.tableContainer;
	newOptions.columnHeaders = options.columnHeaders ? options.columnHeaders : this.defaultOptions.columnHeaders;
	newOptions.rowContent = options.rowContent ? options.rowContent : this.defaultOptions.rowContent;
	newOptions.columns = newOptions.columnHeaders.content.length;
	newOptions.rows =Object.keys(newOptions.rowContent).length - 1;

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