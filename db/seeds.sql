INSERT INTO department (dep_name)
VALUES
('Science'),
('Engineering'),
('HR'),
('Infirmary'),
('Management');


INSERT INTO employee_role (title, salary, department_id)
VALUES
('Science Officer', 99000, 1),
('Engineer', 105000, 2),
('HR Recruiter', 95000, 3),
('Doctor', 120000, 4),
('Head Manager', 140000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Jadzia', 'Dax', 1, 5 ),
('Geordi', 'La Forge', 2, NULL),
('Deanna', 'Troi', 3, NULL),
('Julian', 'Bashir', 4, 5),
('Kira', 'Nerys', 5, NULL);


-- .. connection connnection.js
-- .js file for all the functions