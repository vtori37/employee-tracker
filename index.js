const inquirer = require('inquirer');
const { exit } = require('process');

 
const promptUser = () => {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'options',
      message: 'Please select from the following options:',
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee"]
    }
  ])
  .then((response) => {
    switch(response.options) {
      case "view all departments":
        viewDepartments ();
        break;
      case "view all roles":
        viewRoles();
        break;
      case "view all employees":
        viewEmployees();
        break;
      case "add a department":
        addDepartment ();
        break;
      case "add a roles":
        addRole();
        break;
      case "add an employees":
        addEmployee();
        break;
      case "update an employees":
        updateEmployee();
        break;
      default:
        quit();
    }
  })
}

const viewDepartments = () => {
  console.log("viewing departments...");

};

const viewRoles= () => {
  console.log("viewing roles...");
};

const viewEmployees = () => {
  console.log("viewing employees...");
};



const addDepartment = () => {
  let promptDepartments = () => {
    inquirer 
    .prompt([
      {
      type: 'list',
      name: 'department',
      message: 'Please select from the following options:',
      choices: ['Science', 'Engineering','HR', 'Infirmary', 'Management']
      }
    ]) 
    .then((response) => {
      
    })  
  }
  console.log("adding new department...");
};

const addRole = () => {
  console.log("adding new roles...");
};

const addEmployee = () => {
  console.log("adding new employee...");
};

const updateEmployee = () => {
  console.log("updating employee...");
};

const quit = () => {
  console.log('Exiting Tracker... Goodbye!') 
  exit();
}

promptUser();

