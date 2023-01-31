INSERT INTO department (name)
VALUES
 ('Finance'),
 ('Engineering'),
 ('Sales'),
 ('Legal');


-- TODO !! tie department_id to department table
INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Lead', '100000', '3'),
('Salesperson','80000', '3'),
('Lead Engineer','150000','2'),
('Software Engineer','120000', '2'),
('Account Manager','160000', '1'),
('Accountant','120000', '1'),
('Legal Team Lead','250000', '4'),
('Lawyer','190000', '4');

-- TODO !! tie manager_id to role_id table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John','Doe','1',NULL),
('Mike','Chan','2','1'),
('Ashley','Rodriguez','3',NULL),
('Kevin','Tupik','4','3'),
('Kunal','Singh','5',NULL),
('Malia','Brown','6','5'),
('Sarah', 'Lourd','7',NULL),
('Tom', 'Allen','8','7');