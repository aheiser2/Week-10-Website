let id=0;
let tableId=0;

//creates a new table to add guests to
document.getElementById('addTable').addEventListener('click', () => {   //on click, should add a table representing a "table" to the HTML page
    tableId++;                                                          //sets the table number
    let table = document.createElement('table');                        //creates a table
    let tr = document.createElement('tr');
    let tbody = document.createElement('tbody')
    for (let i = 0; i < 5; i++){                                        //sets all the headers for the table's information

        let th1 = document.createElement('th');
        let textNode = ''
        switch (i) {
            case 0:
                textNode = document.createTextNode("Table Number");
                break;
            case 1:
                textNode = document.createTextNode("Name");
                break;
            case 2:
                textNode = document.createTextNode("Plus-Ones");
                break;
            case 3:
                textNode = document.createTextNode("Meal-Options");
                break;
            case 4:
                textNode = document.createTextNode("Actions");
            }

        th1.appendChild(textNode);                                      //assembles the table
        tr.appendChild(th1);
        tbody.appendChild(tr);
        table.appendChild(tbody);
    }
    document.querySelector('h5').appendChild(table);                    //places the table in the HTML page
    table.setAttribute('id', `table-${tableId}`);                       //sets table-ID so it can be connected to
    table.setAttribute('class', 'table table-color text-dark table-striped');    //decorates the table
    return table;
});


// adds a new guest and guest information to the table
document.getElementById('add-guest').addEventListener('click', () => {                  //on click, adds entered guest info into a created table row
    let currentTable = document.getElementById(`table-${tableId}`);                     //sets current table to be adding to
    let row = currentTable.insertRow(1);                                                //inserts a row
    row.setAttribute('id', `item-${id}`);                                               //decorates the row
    row.insertCell(0).innerHTML = `${tableId}`;                                         //sets table number
    row.insertCell(1).innerHTML = document.getElementById('new-person').value;          //sets inputted name
    row.insertCell(2).innerHTML = document.getElementById('new-plus-one').value         //sets inputted plus-ones
    row.insertCell(3).innerHTML = document.getElementById('new-meal-option').value;     //sets meal-option
    let actions = row.insertCell(4);                                                    //sets a delete button in last column of row
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-person').value = "";                                   //these three reset values so you can enter new information
    document.getElementById('new-plus-one').value = "";
    document.getElementById('new-meal-option').value = "";
});


//creates a delete person button on the end of the row
function createDeleteButton(id) {                                       
    let btn = document.createElement('button');                         //creates a delete button
    btn.className = 'btn btn-danger';                                   //decorates button
    btn.id = id;                                                        //assigns id so that it can delete proper information
    btn.innerHTML = "Delete";                                           //gives label to button
    btn.onclick = () => {                                               //sets function so that on click, it will delete the
        console.log(`Deleting row with id: item-${id}`);                // guest information associated with that id
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
};

