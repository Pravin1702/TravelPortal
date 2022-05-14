namespace TravelAPI.Models
{
    public class User
    {
        public int? EmployeeId { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string? Role { get; set; }
        public int? Age { get; set; }
        public string? birthday { get; set; }
        public string? gender { get; set; }
        public string? Mobile { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public string? ManagerId { get; set; }
        public string? DepartmentId { get; set; }
        public string? DeprtmentHeadId { get; set; }

    }
}
