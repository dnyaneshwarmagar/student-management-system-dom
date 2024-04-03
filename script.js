import data from "./demo-json-data.json" with { type: 'json' };
let search_button = document.getElementById("search_btn");
search_button.addEventListener("click", searchInTable);

let sortAToZButton = document.getElementById("sortAToZBtn");
sortAToZButton.addEventListener("click", sortAtoZ);

let sortZToAButton = document.getElementById("sortZToABtn");
sortZToAButton.addEventListener("click", sortZtoA);

let sortByMarkButton = document.getElementById("sortByMarkBtn");
sortByMarkButton.addEventListener("click", sortByMarks);

let sortByPassingButton = document.getElementById("sortByPassingBtn");
sortByPassingButton.addEventListener("click", sortByPassing);

let sortByClassButton = document.getElementById("sortByClassBtn");
sortByClassButton.addEventListener("click", sortByClass);

let sortByGenderButton = document.getElementById("sortByGenderBtn");
sortByGenderButton.addEventListener("click", sortByGender);


let dataArray = [...data]
function mapDataToTable(arr, tableId) {
    console.log('tableId:', tableId)
    let table = document.getElementById(`${tableId}`);
    table.innerHTML = `
    <colgroup>
                <col>
                <col class="wider_col">
                <col>
                <col>
                <col>
                <col>
                <col class="wider_col">
            </colgroup>
          <tr class="height_class">
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Passing</th>
            <th>Email</th>
          </tr>
    `

    arr.forEach((element, index) => {
        let row = document.createElement("tr");
        row.innerHTML =
            `<td>${index + 1}</td>
        <td class="name_td">
            <div class="img_span">
                <img src=${element.img_src} alt="img">
                </div>
                <span>${element.first_name + " " + element.last_name}</span>
            
        </td>
        <td>${element.gender}</td>
        <td>${element.class}</td>
        <td>${element.marks}</td>
        <td>${element.passing ? "Passing" : "Failed"}</td>
        <td>${element.email}</td>
        `;

        table.append(row)
    })
};

mapDataToTable(dataArray, "table1")

function searchInTable() {
    let searchValue = document.querySelector("input").value;

    let filteredArray = dataArray.filter((element) => element.first_name.includes(searchValue) || element.last_name.includes(searchValue) || element.email.includes(searchValue));

    mapDataToTable(filteredArray, "table1");
    clearTable2()
}

function sortAtoZ() {
    let arrayOfObjects = [...dataArray];
    arrayOfObjects.sort((a, b) => {
        let firstnameA = a.first_name.toUpperCase(); // Ignore case
        let firstnameB = b.first_name.toUpperCase();
        if (firstnameA < firstnameB) {
            return -1;
        }
        if (firstnameA > firstnameB) {
            return 1;
        }
        // Names are equal
        return 0;
    });

    mapDataToTable(arrayOfObjects, "table1");
    clearTable2()
}

function sortZtoA() {
    let arrayOfObjects = [...dataArray];
    arrayOfObjects.sort((a, b) => {
        let firstnameA = a.first_name.toUpperCase(); // Ignore case
        let firstnameB = b.first_name.toUpperCase();
        if (firstnameA < firstnameB) {
            return 1;
        }
        if (firstnameA > firstnameB) {
            return -1;
        }
        // Names are equal
        return 0;
    });

    mapDataToTable(arrayOfObjects, "table1");
    clearTable2()
}

function sortByMarks() {
    let arrayOfObjects = [...dataArray];
    arrayOfObjects.sort((a, b) => {
        let marksA = a.marks;
        let marksB = b.marks;
        if (marksA < marksB) {
            return -1;
        }
        if (marksA > marksB) {
            return 1;
        }
        // Names are equal
        return 0;
    });

    mapDataToTable(arrayOfObjects, "table1");
    clearTable2()
}

function sortByClass() {
    let arrayOfObjects = [...dataArray];
    arrayOfObjects.sort((a, b) => {
        let classA = a.class;
        let classB = b.class;
        if (classA < classB) {
            return -1;
        }
        if (classA > classB) {
            return 1;
        }
        // Names are equal
        return 0;
    });

    mapDataToTable(arrayOfObjects, "table1");
    clearTable2()
}

function sortByPassing() {
    let filteredArray = dataArray.filter((element) => element.passing === true);

    mapDataToTable(filteredArray, "table1");
    clearTable2()
}


function sortByGender() {
    let arrayOfGenderMale = dataArray.filter((element) => element.gender === "Male");

    mapDataToTable(arrayOfGenderMale, "table2");

    let arrayOfGenderFemale = dataArray.filter((element) => element.gender === "Female");

    mapDataToTable(arrayOfGenderFemale, "table1")
}

function clearTable2() {
    let table = document.getElementById("table2");
    table.innerHTML = ""
}
