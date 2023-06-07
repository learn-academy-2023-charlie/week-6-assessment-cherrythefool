# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I tend to forget the foreign key sometimes so luckily I have practice with this! To fix it, go into the terminal and make a new database change to add a column to the student model for a foreign key, which should have the name of cohort_id. Migrating it will add the attribute to the student model. 

Researched answer: This is a pretty common mistake and luckily I have some experience with it. It's also pretty easy to fix! We just need to generate a migration, and in that migration file add cohort_id as a column in the Student model - this will become the foreign key. Then all we have to do is run the migration to actually add it into the database.

2. Which RESTful routes must always be passed params? Why?

Your answer: Some RESTful routes always need params to effectively work with the data. Index and Show need information to store and access the data. Edit and update need params to know what to change. Create and destroy do not require params, just the access to the info being routed. 

Researched answer: The routes that require params are the ones which require information to work - show, edit, update, and destroy. These require input to at least identify the specific instance we want to interact with, and update requires additional information from the user for changes being made (taken from the edit form).

3. Name three rails generator commands. What is created by each?

Your answer: Three rails generator commands I'm used to using are migrations, models, and controllers. Generating a migration makes a new file which can be used to make changes in a database table. A model is kind of like a blueprint or framework for data and works closely with the database. A controller works with the user and the controller to allow interaction between the two. 

Researched answer: I can use rails generator for a number of things, but lets talk about migrations, models, and controllers. 
Generating a migration makes a file, and we can use this file to make changes to a model or the database schema.  
Generating a model also makes a new file, and this contains structure for database information. 
If we generate a controller we're making a logic middle-man of sorts (also a new file) - controllers get information from the user to add to a database using models, and present changes by returning the appropriate view.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
This will use the Index method, and will display stored students

action: "POST" location: /students
This will use the Create method, and will push a new student into a database

action: "GET" location: /students/new
This will use the New method and will allow a user to input a new instance of a student

action: "GET" location: /students/2
This will use the Show method, and will display the student stored with the primary key of 2.

action: "GET" location: /students/2/edit
This will use the Edit method, and will allow a user to input different information for the student stored at location 2.

action: "PATCH" location: /students/2
This will use the Update method, and will allow edited information for the student at location 2 to be changed in the database

action: "DELETE" location: /students/2
This will use the Destroy method, and will delete the student at location 2.


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

As a user, I can see a home page

As a user, I can see the names of to-do list tasks on the home page as a link

As a user, I can add a new to-do list task with name of task, status, extra information, and dependencies

As a user, I can edit to-do list task information

As a user, I can mark to-do list tasks as complete

As a user, I can see all tasks which share a status

As a user, I can delete individual tasks and can delete all tasks marked complete

As a user, I can find all tasks which depend on each other

As a user, I can see a visual representation of how these tasks depend on each other (like a web or gantt style chart)

As a user, the to-do list application is easy to use and to look at