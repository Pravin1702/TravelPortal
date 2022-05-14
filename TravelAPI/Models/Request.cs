namespace TravelAPI.Models
{
    public class Request
    {
        public int ?TravelId { get; set; }
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public string reason { get; set; }
        public string Proof { get; set; }
        public string loc { get; set; }
        public string isLocal { get; set; }
        public int nDays { get; set; }
        public string fromDate { get; set; }
        public string toDate { get; set; }
        public int? managerapp { get; set; }
        public int? departmentapp { get; set; }
        public string ?Ticket { get; set; }
    }
}
