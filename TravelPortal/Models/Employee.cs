namespace TravelPortal.Models
{
    public class Employee
    {
        public int ?EmployeeId { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string ?Token { get; set; }
        public string ?role { get; set; }
        public int ?Age { get; set; }
        public DateOnly ?birthday { get; set; }
        public string ?gender { get; set; }
        public string ?Mobile { get; set; }
        public string ?Email { get; set; }
        public string ?Address { get; set; }
        public int ?ManagerId { get; set; }
        public int ?DepartmentId { get; set; }
        public int ?DeaprtmentHeadId { get; set; }

    }

}
