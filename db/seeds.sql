use tasks_db;
insert into tasks(name) values
("Get Milk from Ralphs"),
("Finish handlebars project");

alter table tasks add column done boolean;
update tasks set done = false;

select * from tasks;