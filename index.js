// Packages needed for this application
const inquirer = require("inquirer");

// Prompt user for input
const promptQuestion = (input) => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "Action",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])
    .then((input) => {
      switch (input.Action) {
        case "view all departments":
          console.log("view dept");
          // presented with a formatted table showing department names and department ids
          break;
        case "view all roles":
          console.log("view role");
          // presented with the job title, role id, the department that role belongs to, and the salary for that role
          break;
        case "view all employees":
          console.log("view employees");
          // presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
          break;
        case "add a department":
          console.log("add depart");
          // prompted to enter the name of the department and that department is added to the database
          break;
        case "add a role":
          console.log("add role");
          // prompted to enter the name, salary, and department for the role and that role is added to the database
          break;
        case "add an employee":
          console.log("add empl");
          // prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
          break;
        case "update an employee role":
          console.log("update epml");
          // prompted to select an employee to update and their new role and this information is updated in the database
          break;
      }
      return input;
    });
};

promptQuestion();
