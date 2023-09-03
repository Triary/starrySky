
let tableGenerator = {

    GenerateRow: function(rowNumber){
        $("#tableroot table").append('<tr id="row_' + rowNumber + '"></tr>');
    },

    GenerateCell: function(rowNumber, columnNumber){
        $("#tableroot table tr:last").append('<td id="cell_' + rowNumber + '_' + columnNumber + '"></td>');
    },


    GenerateTable: function(rowsCount, columnCount) {
        $("#tableroot").append("<table> </table>");
        for(let RowCounter = 0; RowCounter < rowsCount; RowCounter++)
        {
           this.GenerateRow(RowCounter);
           for(let columnCounter = 0; columnCounter < columnCount; columnCounter++)
           {
               this.GenerateCell(RowCounter, columnCounter);
           }
        }
    }
}