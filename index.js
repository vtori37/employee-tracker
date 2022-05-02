const inquirer = require('inquirer');
const { exit } = require('process');
const mysql = require('mysql2');
const dbCon = require('./db/dbConnect');
const cTable = require('console.table')


console.log(" ------ Hello! You are connected to the employee tracker. ------");

const promptUser = () => {
  
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'options',
      message: 'Please select from the following options:',
      choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee"]
    }
  ])
  .then((response) => {
    switch(response.options) {
      case "View all departments":
        viewDepartments ();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "View all employees":
        viewEmployees();
        break;
      case "Add a department":
        addDepartment ();
        break;
      case "Add a roles":
        addRole();
        break;
      case "Add an employees":
        addEmployee();
        break;
      case "Update an employees":
        updateEmployee();
        break;
      default:
        quit();
    }
  })
}

const viewDepartments = () => {
  console.log("Viewing departments...");
  let sql = `SELECT dep_name FROM department;`;

  dbCon.promise().query(sql)
    .then(([rows]) => {
      console.log("============")
      console.table(rows)
      console.log("============")
     promptUser();
    }); 
};

const viewRoles= () => {
  console.log("viewing roles...");
  let sql = `SELECT title, salary, department_id FROM employee_role`
  dbCon.promise().query(sql)
  .then(([rows]) => {
    console.log("============")
    console.table(rows)
    console.log("============")
   promptUser();
  });
};

const viewEmployees = () => {
  console.log("viewing employees...");
  let sql = `SELECT first_name, last_name, role_id, manager_id FROM employee`
  dbCon.promise().query(sql)
  .then(([rows]) => {
    console.log("============")
    console.table(rows)
    console.log("============")
   promptUser();
  });
};



const addDepartment = () => {
    inquirer 
    .prompt([
      {
        type: 'input',
        name: 'askDepartment',
        message: 'Please type in the name of the new department.',
        validate: depInput => {
          if (depInput) {
            return true;
          } else {
            console.log('Please type in a new department name.');
          } return false;
        }
      },
    ]);

    let sql = `INSERT INTO department VALUES ('${askDepartment}')`;
    dbCon.promise().query(sql)
      .then(([rows]) => {
        console.log("============")
        console.table(rows)
        console.log("============")
       promptUser();
      });  
   
  console.log("adding new department...");
};

// const addRole = () => {
//   inquirer 
//   .prompt([
//     {
//       type: 'input',
//       name: 'askDepartment',
//       message: 'Please type in the name of the new role.',
//       validate: roleInput => {
//         if (roleInput) {
//           return true;
//         } else {
//           console.log('Please type in a new role name.');
//         } return false;
//       }
//     },
//       {
//         type: 'input',
//         name: 'askSalary',
//         message: 'Please type in the salary.',
//         validate: salInput => {
//           if (salInput) {
//             return true;
//           } else {
//             console.log('Please type in a new salary.');
//           } return false;
//         }
//       }
//   ]) 
//   .then((response) => {
      
//     })  
//   console.log("adding new roles...");
// };

// const addEmployee = () => {
//   inquirer 
//   .prompt([
//     {
//       type: 'input',
//       name: 'askDepartment',
//       message: 'Please type in the name of the new department.',
//       validate: depInput => {
//         if (depInput) {
//           return true;
//         } else {
//           console.log('Please type in a new department name.');
//         } return false;
//       }
//     }
//   ]) 
//   .then((response) => {
      
//     })  
//   console.log("adding new employee...");
// };

// const updateEmployee = () => {
//   inquirer 
//     .prompt([
//       {
//       type: 'list',
//       name: 'askUpdate',
//       message: 'Please select from the following options:',
//       choices: ['Science', 'Engineering','HR', 'Infirmary', 'Management']
//       }
//     ]) 
//     .then((response) => {
      
//     })  
//   console.log("Updating employee...");
// };

// const quit = () => {
//   inquirer 
//     .prompt([
//       {
//       type: 'list',
//       name: 'askQuit',
//       message: 'Would you like to end the connection?',
//       choices: ['Yes', 'No']
//       }
//     ]) 
//     .then((response) => {
//       console.log('Exiting Tracker... Goodbye!') 
//       exit();
//     })  
// };

promptUser();


