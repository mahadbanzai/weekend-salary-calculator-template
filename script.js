console.log("Hey Buddy"); 



function addNewEmployee(event) {
  event.preventDefault();

  let firstNameInput= document.getElementById('firstName').value;
  let LastNameInput= document.getElementById("lastName").value;
  let idInput= document.getElementById("idNumber").value;
  let titleInput = document.getElementById("jobTitle").value;
  let annualSalaryInput = document.getElementById("annualSalary").value;

  let newTablerow = ` <tr>
    <td>${firstNameInput}</td>
    <td>${LastNameInput}</td>
    <td>${idInput}</td>
    <td>${titleInput}</td>
    <td>${annualSalaryInput}</td>
    <td><button onclick="deleteRow(event)">❌</button></td>
  </tr>`
  let tableLocation = document.getElementById("CalulatorTable");
  tableLocation.innerHTML += newTablerow;

}
function deleteRow(event) {
    
    let buttonclicked = event.target;
    let toDelete =buttonclicked.parentElement.parentElement;
    toDelete.remove();

  }
