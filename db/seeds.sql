INSERT INTO departments (name)
VALUES ("Accounting"),
       ("Customer Service"),
       ("Marketing"),
       ("Production");

INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 60000.00, 1),
       ("Payroll Clerk", 55000.00, 1),
       ("Customer Support Officer", 55000.00, 2),
       ("Receptionist", 55000.00, 2),
       ("Call Centre Officer", 55000.00, 2),
       ("Sales Associate", 60000.00, 3),
       ("Marketing Assistant", 50000.00, 3),
       ("Senior Engineer", 65000.00, 4),
       ("Junior Engineer", 58000.00, 4),
       ("QA Tester", 58000.00, 4),
       ("Styles Designer", 60000.00, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL),
       ("Jane", "Smith", 1, NULL);