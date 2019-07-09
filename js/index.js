let myTable = new TableDrag({
	tableContainer:"test",
	columnHeaders:{
		content:["column1","column2","column3"],
		classes:["test1","test2"]
	},
	rowContent:{
		row1:["row 1 column 1","row 1 column 2","row 1 column 3"],
		row2:["row 2 column 1","row 2 column 2","row 2 column 3"],
		row3:["row 3 column 1","row 3 column 2",,"row 3 column 3"],
		classes:["test1","test2","test3"]
	}
});