## Note:
* You might also want to make your queries asynchronous. MySQL2 exposes a .promise() function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the npm documentation on MySQL2 Links to an external site..

* Note: You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a seeds.sql file to pre-populate your database, making the development of individual features much easier.

## Bonus
Update employee managers.
View employees by manager.
View employees by department.
Delete departments, roles, and employees.
View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.