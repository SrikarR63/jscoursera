const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:'C++' },
    //... More employee records can be added here
  ];



// Function to display all employees
function displayEmployees(){
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

//Function to calculate total salaries
function calculateTotalSalaries(){
    var totsal=0;
    employees.forEach(employee => {
        totsal+=employee.salary;
    });
    alert(`Total Salary is: $${totsal}`);
}

//Function to display HR employee details based on departments
function displayHREmployees(){
    const hrdetails=employees.filter((employee)=>employee.department==='HR');
    const hrEmployeesDisplay = hrdetails.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}


//Function to display employee details based on their id
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }

 function findempbyspec(specdetails){
    const findspec=employees.find((employee)=>employee.specialization===specdetails);
    if(findspec){
        document.getElementById('employeesDetails').innerHTML=`<p>${findspec.name} - ${findspec.age} - ${findspec.department} - ${findspec.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML=`<p>Could not find employee with ${specdetails} specialization</p>`;
    }
 }

