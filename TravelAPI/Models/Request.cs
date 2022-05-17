namespace TravelAPI.Models
{
    public class Request
    {
        public int ?TravelId { get; set; }
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public string reason { get; set; }
        public string loc { get; set; }
        public string isLocal { get; set; }
        public int nDays { get; set; }
        public string fromDate { get; set; }
        public string toDate { get; set; }
        public string? managerapp { get; set; }
        public string? departmentapp { get; set; }
        public string ?status { get; set; }
        public string ?Ticket { get; set; }
        public string ? TicketId { get;set; }
        public string ? vehicleName { get;set; }
        public string ? TicketTime { get;set; }
        public string ? TravelLocation { get;set; }
        public string ? hotalName { get;set; }
        public string ? hotalroomnumber { get;set; }
        public string ? cabname { get;set; }
        public string ? cabtime { get;set; }

    }
}
