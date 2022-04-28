USE employee_db;

INSERT INTO department(dep_name);
VALUES
("Science"),
("Engineering"),
("HR"),
("Infirmary")


INSERT INTO employee_role(title, salary, department_id)
VALUES
("Science Officer", 90000, 1),
("Engineer", 95000, 2)
("HR Recruiter", 88000, 3),
("Doctor", 120000, 4),
("Science Manager", 950000, 1),


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("Worf", "Klingon", 1, 2 ), -- his manager is janeway who is position 2
("Katherine", "Janeway", 5, null)
("")
("")
("Beverly", "Crusher", 4, ),


.. connection connnection.js
.js file for all the functions