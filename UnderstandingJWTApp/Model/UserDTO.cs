namespace UnderstandingJWTApp.Model
{
    public class UserDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
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
