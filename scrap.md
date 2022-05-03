* A command-line application that accepts user input


* start the application:
  we're presented with the following options: 
     - view all departments, 
     - view all roles, 
     - view all employees, 
     - add a department, 
     - add a role, 
     - add an employee, and 
     - update an employee role


* Viewing all departments:

    - Shows a formatted table with department names and department ids


* Viewing all roles:

  presents:
    -job title, 
    -role id,
    -department that role belongs to
    -the salary for that role


* Viewing all employees:

    Presents a formatted table showing:
    - employee data, 
    - including employee ids, 
    - first names, 
    - last names, 
    - job titles, 
    - departments, 
    - salaries,
    - managers that the employees report to


* Adding a department

    - prompts user to enter the name of the department
    - department is added to the database


* Adding a role

prompts user to enter 
- the name, 
- salary, and 
- department for the role

the role gets: 
- added to the database


* Adding an employee

Prompts user to enter the employee’s 
- first name, 
- last name, 
- role, and 
- manager, and 

That employee is 
- added to the database


* Updating an employee role

prompts user to select an employee to update and 
- their new role

this information is:
- updated in the database



* You will have to do a query to get the other id's from other tables. In your schema you also need to set up foreign keys to link the tables

* https://www.mysqltutorial.org/mysql-foreign-key/ 
MySQL TutorialMySQL Tutorial: An Essential Guide to MySQL Foreign Key By Practical Examples
This tutorial introduces you to MySQL foreign key constraint and shows you how to create a foreign key for a table with various reference options.

* Yes so you will first have to link the tables and set up foreign keys in your schema

* Then you will do the query to get all departments in your addRole function and maybe save it in a variable

* Then map over the results to get name and value

* that way when you pass that result in choices in inquirer it will display all department names and user can choose

* Then you will also have to do joins to join the tables in the query to get all roles */