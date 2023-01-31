// Packages needed for this application
const inquirer = require("inquirer");
const db = require("./db/connection");

// Prompt user for input
const promptUser = (input) => {
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
          viewAllDepartments();
          break;
        case "view all roles":
          viewAllRoles();
          break;
        case "view all employees":
          viewAllEmployees();
          break;
        case "add a department":
          addDepartment();
          break;
        case "add a role":
          addRole();
          break;
        case "add an employee":
          addEmployee();
          break;
        case "update an employee role":
          updateEmployee();
          break;
      }
      return input;
    });
};

promptUser();

// presented with formatted table showing department names and department ids
const viewAllDepartments = () => {
  db.query(
    `SELECT department.id, department.name FROM department;`,
    function (err, res) {
      if (err) throw err;
      console.table(res);
      promptUser();
    }
  );
};

//presented with job title, role id, department that role belongs to, and salary for that role
const viewAllRoles = () => {
  db.query(
    `SELECT roles.title, roles.id AS role_id, roles.salary, department.name AS department_name
    FROM roles LEFT JOIN department
    ON roles.department_id = department.id;`,
    function (err, res) {
      if (err) throw err;
      console.table(res);
      promptUser();
    }
  );
};

// presented with employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewAllEmployees = () => {
  db.query(
    `SELECT employee.id AS employee_id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, 
    CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
    FROM employee employee 
    LEFT JOIN roles roles 
    ON employee.role_id = roles.id 
    LEFT JOIN department department 
    ON department.id = roles.department_id 
    LEFT JOIN employee manager 
    ON manager.id = employee.manager_id`,
    function (err, res) {
      if (err) throw err;
      console.table(res);
      promptUser();
    }
  );
};

//prompted to enter the name of the department and that department is added to the database
const addDepartment = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What department would you like to add?",
      },
    ])
    .then((input) => {
      const params = input.name;
      const sql = `INSERT INTO department (name) VALUES (?)`;
      db.query(sql, params, (err, res) => {
        if (err) throw err;
        return input;
      });
    })
    .then(() => {
      promptUser();
    });
};

// // prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What role would you like to add?",
      },
      {
        type: "input",
        name: "salary",
        message: "What's the salary?",
      },
      {
        type: "input",
        name: "department_id",
        message: "What's the department's ID?",
      },
    ])
    .then((input) => {
      const params = [input.title, input.salary, input.department_id];
      const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
      db.query(sql, params, (err, res) => {
        if (err) throw err;
        return input;
      });
    })
    .then(() => {
      promptUser();
    });
};

// // prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What's the employee's first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What's the employee's last name?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What is their role ID?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "What is their manager's ID?",
      },
    ])
    .then((input) => {
      const params = [
        input.first_name,
        input.last_name,
        input.role_id,
        input.manager_id,
      ];
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
      db.query(sql, params, (err, res) => {
        if (err) throw err;
        return input;
      });
    })
    .then(() => {
      promptUser();
    });
};

// prompted to select an employee to update and their new role and this information is updated in the database
const updateEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "id",
        message: "What's the ID of the employee you want to update?",
      },
      {
        type: "input",
        name: "role_id",
        message: "What will be their new role ID?",
      },
    ])
    .then((input) => {
      const params = [
        input.id,
        input.role_id,
      ];
      const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
      db.query(sql, params, (err, res) => {
        if (err) throw err;
        return input;
      });
    })
    .then(() => {
      promptUser();
    });
};
