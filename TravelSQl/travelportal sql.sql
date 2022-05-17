create database Travel1

use Travel1

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
ManagerId int constraint fk_Manager foreign key references Employee(EmployeeId),
DepartmentId int constraint fk_departmentid foreign key references Department(DepartmentId) ,
DepartmentHeadId int constraint fk_departmenthead foreign key references Employee(EmployeeId)
)

--Add employee

create proc proc_InsertEmployee(@uname varchar(50),@upass varchar(2000),@urole varchar(30),@uage int,@ubrd date,@ugen varchar(20),@umobile varchar(20),@uemail varchar(50),@uadrs varchar(100),@umanagerid int,@udeptid int,@udptheadid int)
as
begin
   insert into Employee values(@uname,@upass,@urole,@uage,@ubrd,@ugen,@umobile,@uemail,@uadrs,@umanagerid,@udeptid,@udptheadid)
end

exec proc_InsertEmployee 'rahul','1212','facility',21,'2002-07-18','male','1234567890','rahul@gmail.com','123/2 vdfsdf india',101,103,null


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
loc varchar(30), 
isLocal varchar(20),
nDays int,
fromDate varchar(10),
toDate varchar(20),
managerapp varchar(20),
departmentapp varchar(20),
status varchar(20)
)

create proc proc_OnlineTravel(@eid int,@uname varchar(20),@reason varchar(1000),@loc varchar(50),@islocal varchar(20),@ndate int,@fromdate varchar(20),@todate varchar(20),@mngapp varchar(20),@deptapp varchar(20),@status varchar(20))
as
begin
	insert into OnlineRequest values(@eid,@uname,@reason,@loc,@islocal,@ndate,@fromdate,@todate,@mngapp,@deptapp,@status)
end

exec proc_OnlineTravel 107,'priya','client meet','/image/pic1.jpg','chennai','Domestic',2,'02/04/2022','04/04/2022',0,0

create proc proc_managerapprovel(@tid int,@mngapp varchar(20))
as
begin
	UPDATE OnlineRequest SET managerapp=@mngapp WHERE TravelId=@tid
end

create proc proc_deptheadapprovel(@tid int,@deptapp varchar(20))
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
	select * from OnlineRequest where managerapp='process'
end

create proc proc_GetAllonlinedepartment
as
begin
	select * from OnlineRequest where departmentapp='process' and managerapp='approvel'
end

create proc proc_GetAllonlinefacility
as
begin
	select * from OnlineRequest where status='process' and departmentapp='approvel'
end

create proc proc_MyTravelRequest(@uid int)
as
begin
	select * from OnlineRequest where EmployeeId=@uid
end

--add request sent to post employee

create table TravelTeamRequest(
TravelId int constraint fk_postrequest foreign key references OnlineRequest(TravelId),
EmployeeId int constraint fk_employeetravel foreign key references Employee(EmployeeId) not null,
Name varchar(20), 
reason varchar(1000),
loc varchar(30), 
isLocal varchar(20),
nDays int,
fromDate varchar(10),
toDate varchar(20),
TicketId varchar(50),
vehicleName varchar(50),
TicketTime varchar(20),
TravelLocation varchar(50),
hotalName varchar(20),
hotalroomnumber varchar(20),
cabname varchar(20),
cabtime varchar(20)
)

create proc proc_PostTravel(@tid int,@eid int,@uname varchar(20),@reason varchar(1000),@loc varchar(50),@islocal varchar(20),@ndate int,@fromdate varchar(20),@todate varchar(20),@ticketid varchar(50),@vecname varchar(50),@traveltime varchar(20),@travelloc varchar(50),@hotalname varchar(20),@hotalroomid varchar(20),@cabname varchar(20),@cabtime varchar(20))
as
begin
	insert into TravelTeamRequest values(@tid,@eid,@uname,@reason,@loc,@islocal,@ndate,@fromdate,@todate,@ticketid,@vecname,@traveltime,@travelloc,@hotalname,@hotalroomid,@cabname,@cabtime)
end

exec proc_PostTravel  101,107,'priya','client meet','/image/pic1.jpg','chennai','Domestic',2,'02/04/2022','04/04/2022','ticket number 100232'

create proc proc_GetAllPostRequest
as
begin
	select * from TravelTeamRequest
end

create proc proc_GetAllMyPostRequest(@uid int)
as
begin
	select * from TravelTeamRequest where EmployeeId=@uid
end

