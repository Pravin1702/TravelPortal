create database Travel

use Travel

create table Department(
DepartmentId int identity(101,1) constraint pk_deptid primary key ,
Name varchar(50))

INSERT INTO Department(Name)
VALUES ('facility');

select * from Department

create table Employee
(EmployeeId int identity(101,1) constraint pk_deptEmployee primary key,
Name varchar(50) not null,
password varchar(2000),
role varchar(30)  check(role in('employee','manager','deptment','facility','hr')),
Age int,
birthdaydate varchar(20),
gender varchar(20) check(gender in('male','female')),
Mobile varchar(20),
Email varchar(50),
Address varchar(100),
ManagerId int constraint fk_Manager foreign key references Employee(EmployeeId) null,
DepartmentId int constraint fk_departmentid foreign key references Department(DepartmentId) null,
DepartmentHeadId int constraint fk_departmenthead foreign key references Employee(EmployeeId) null
)

--Add employee

create proc proc_InsertEmployee(@uname varchar(50),@upass varchar(2000),@urole varchar(30),@uage int,@ubrd date,@ugen varchar(20),@umobile varchar(20),@uemail varchar(50),@uadrs varchar(100),@umanagerid int,@udeptid int,@udptheadid int)
as
begin
   insert into Employee values(@uname,@upass,@urole,@uage,@ubrd,@ugen,@umobile,@uemail,@uadrs,@umanagerid,@udeptid,@udptheadid)
end

exec proc_InsertEmployee 'musraf','1212','employee',21,'2002-07-18','male','1232312','musraf@gmail.com','123/2 vdfsdf india',106,101,102


--Login Employee

create proc proc_LoginEmployee(@uname varchar(50),@upass varchar(50))
as
begin
	select * from Employee where Name=@uname and password=@upass
end

exec proc_LoginEmployee 'priya','1212'

--getAllEmployee

create proc proc_GetAllEmployee
as
begin
	select * from Employee
end

exec proc_GetAllEmployee

--add request sent to online employee

create table OnlineRequest(
TravelId int identity(101,1) constraint pk_onlinerequest primary key not null,
EmployeeId int constraint fk_depttravel foreign key references Employee(EmployeeId) not null,
Name varchar(20), 
reason varchar(1000),
Proof varchar(100), 
loc varchar(30), 
isLocal varchar(20),
nDays int,
fromDate varchar(10),
toDate varchar(20),
managerapp int check(managerapp in(0,1,2)),
departmentapp int check(departmentapp in(0,1,2))
)

create proc proc_OnlineTravel(@eid int,@uname varchar(20),@reason varchar(1000),@proof varchar(20),@loc varchar(50),@islocal varchar(20),@ndate int,@fromdate varchar(20),@todate varchar(20),@mngapp int,@deptapp int)
as
begin
	insert into OnlineRequest values(@eid,@uname,@reason,@proof,@loc,@islocal,@ndate,@fromdate,@todate,@mngapp,@deptapp)
end

exec proc_OnlineTravel 107,'priya','client meet','/image/pic1.jpg','chennai','Domestic',2,'02/04/2022','04/04/2022',0,0

create proc proc_managerapprovel(@tid int,@mngapp int)
as
begin
	UPDATE OnlineRequest SET managerapp=@mngapp WHERE TravelId=@tid
end

create proc proc_deptheadapprovel(@tid int,@deptapp int)
as
begin
	UPDATE OnlineRequest SET departmentapp=@deptapp WHERE TravelId=@tid
end

create proc proc_GetAllonlinerequest
as
begin
	select * from OnlineRequest
end

create proc proc_GetAllonlinemanager
as
begin
	select * from OnlineRequest where managerapp=0
end

create proc proc_GetAllonlinedepartment
as
begin
	select * from OnlineRequest where departmentapp=0
end

create proc proc_GetAllonlinefacility
as
begin
	select * from OnlineRequest where managerapp=1 and departmentapp=1
end

create proc proc_DeleteAccept(@tid int)
as
begin
	delete from OnlineRequest where TravelId=@tid
end

--add request sent to post employee

create table PostRequest(
TravelId int constraint fk_postrequest foreign key references OnlineRequest(TravelId),
EmployeeId int constraint fk_employeetravel foreign key references Employee(EmployeeId) not null,
Name varchar(20), 
reason varchar(1000),
Proof varchar(100), 
loc varchar(30), 
isLocal varchar(20),
nDays int,
fromDate varchar(10),
toDate varchar(20),
Ticket varchar(100),
)

create proc proc_PostTravel(@tid int,@eid int,@uname varchar(20),@reason varchar(1000),@proof varchar(20),@loc varchar(50),@islocal varchar(20),@ndate int,@fromdate varchar(20),@todate varchar(20),@ticket varchar(100))
as
begin
	insert into PostRequest values(@tid,@eid,@uname,@reason,@proof,@loc,@islocal,@ndate,@fromdate,@todate,@ticket)
end

exec proc_PostTravel  101,107,'priya','client meet','/image/pic1.jpg','chennai','Domestic',2,'02/04/2022','04/04/2022','ticket number 100232'

create proc proc_GetAllPostRequest
as
begin
	select * from PostRequest
end


