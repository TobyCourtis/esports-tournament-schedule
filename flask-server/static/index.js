let tableData = null;

function log_this_info() {
    const http = new XMLHttpRequest()

    http.open("GET", "http://127.0.0.1:5000/tournaments")
    http.send()

    http.onload = () => {
        console.log(http.responseText);
        tableData = JSON.parse(http.responseText);
        populateTable();
    }

}

function populateTable() {
    const table = document.getElementById('table')

    for (let i = 0; i < tableData.length; i++) {
        const row = table.insertRow(i + 1);
        populateRow(row, tableData[i]);
    }
}

function populateRow(row, rowData) {
    const nameCell = row.insertCell(0);
    const prizeCell = row.insertCell(1);
    const dateCell = row.insertCell(2);
    const locationCell = row.insertCell(3);

    // access rowData with data type coming from Flask API
    nameCell.innerHTML = rowData['Name'];
    prizeCell.innerHTML = rowData['PrizePool'];
    dateCell.innerHTML = rowData['Date'];
    locationCell.innerHTML = rowData['Location'];
}