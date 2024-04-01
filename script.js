console.log("Hey Buddy");

let totalMonthlyCost = 0; 

function addNewEmployee(event) {
    event.preventDefault();

    // Retrieve input values
    let firstNametext = document.getElementById('firstName').value;
    let lastNametext = document.getElementById("lastName").value;
    let idNumbertext = document.getElementById("idNumber").value;
    let jobTitletext = document.getElementById("jobTitle").value;
    let annualSalary = parseFloat(document.getElementById("annualSalary").value);

    // Update table with employee data
    let tableBody = document.getElementById("CalculatorTable");
    tableBody.innerHTML += `<tr>
        <td id="tableFirst">${firstNametext}</td>
        <td id="tableLast">${lastNametext}</td>
        <td id="tableID">${idNumbertext}</td>
        <td id="tableJob">${jobTitletext}</td>
        <td id="tableAnnual">${annualSalary}</td>
        <td><button onclick="deleteEmployee(event)">❌</button></td>
    </tr>`;

    // Update total monthly cost
    totalMonthlyCost += annualSalary / 12;
    updateTotalMonthlyCost();

    // Clear input fields
    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('idNumber').value = "";
    document.getElementById('jobTitle').value = "";
    document.getElementById('annualSalary').value = "";
}

function deleteEmployee(event) {
    const row = event.target.closest('tr');
    let annualSalary = parseFloat(row.querySelector('#tableAnnual').textContent);
    totalMonthlyCost -= annualSalary / 12;
    row.remove();
    updateTotalMonthlyCost();
}

function updateTotalMonthlyCost() {
    let totalMonthlyCostElement = document.getElementById("totalMonthlyCost");
    totalMonthlyCostElement.textContent = "Total Monthly Cost: $" + totalMonthlyCost.toFixed(2);
    let footer = document.getElementById("footer");
    if (totalMonthlyCost > 20000) {
        totalMonthlyCostElement.style.color = "red";
    } else {
        totalMonthlyCostElement.style.color = "";
    }
}
