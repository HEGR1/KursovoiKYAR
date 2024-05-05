function loadData() {
    const xhr = new XMLHttpRequest();
    const url = "xml/trips.xml"; // Replace "data.xml" with your actual file path

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const xmlDoc = this.responseXML;
            processData(xmlDoc);
        }
    };
    xhr.send();
}
function processData(xmlDoc) {
    const container = document.getElementsByTagName("tbody")[0];
    const rows = xmlDoc.getElementsByTagName("tr");

    let htmlString = "";
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName("td");
        if (cells.length === 5) {
            // Check if there are exactly 5 td elements
            htmlString += "<tr>"; // Open table row
            for (let j = 0; j < cells.length; j++) {
                const cellData = cells[j].textContent;
                let innerHTML = cellData;

                if (j === 2 && cells[j].getElementsByTagName("a").length > 0) {
                    // If 3rd td has an a tag, interpret its content as HTML
                    const anchor = cells[j].getElementsByTagName("a")[0];
                    innerHTML = anchor.outerHTML; // Use outerHTML to include anchor tag
                } else if (j === 4 && cells[j].getElementsByTagName("button").length > 0) {
                    const button = cells[j].getElementsByTagName("button")[0];
                    innerHTML = button.outerHTML;
                }

                htmlString += `<td>${innerHTML}</td>`;
            }
            htmlString += "</tr>"; // Close table row
        }
    }
    container.innerHTML = htmlString;
}
loadData();