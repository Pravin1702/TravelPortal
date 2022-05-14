namespace UnderstandingJWTApp.Model
{
    public class User
    {
        public string Username { get; set; }
        public byte[] Password { get; set; }
        public byte[] PasswKey { get; set; }

        public string? Role { get; set; }
        public int? Age { get; set; }
        public string? birthday { get; set; }
        public string? gender { get; set; }
        public string? Mobile { get; set; }
        public string? Email { get; set; }
        public string? Address { get; set; }
        public int? ManagerId { get; set; }
        public int? DepartmentId { get; set; }
        public int? DeaprtmentHeadId { get; set; }
    }
}
