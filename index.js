// Packages needed for this application
const inquirer = require("inquirer");

// Array of questions for user input
const options = [];
const promptQuestions = (input) => {
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
          break;
        case "view all roles":
          console.log("view role");
          break;
        case "view all employees":
          console.log("view employees");
          break;
        case "add a department":
          console.log("add depart");
          break;
        case "add a role":
          console.log("add role");
          break;
        case "add an employee":
          console.log("add empl");
          break;
        case "update an employee role":
          console.log("update epml");
          break;
      }
      return input;
    });
};

promptQuestions();
