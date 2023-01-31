INSERT INTO department (name)
VALUES
 ('finance'),
 ('engineering'),
 ('legal');

INSERT INTO roles (title, salary, department_id)
VALUES
('director', '250000', '8411'),
('analyst','75121','7411'),
('analyst','85232.10','7411');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('shayne','brock','1234','544'),
('charlene','ziane','1234','555'),
('luis','smith','1234','555');