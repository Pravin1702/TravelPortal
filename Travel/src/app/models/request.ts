export class Request{
    
    constructor(
        public travelId:number=0,
        public  employeeId:number=0,
        public  name :string="",
        public  reason :string="",
        public  status :string="process",
        public  loc :string="",
        public  isLocal :string="",
        public  nDays :number=0,
        public  fromDate :string="",
        public  toDate :string="",
        public  managerapp:string="process",
        public  departmentapp:string="process",
        public  ticket :string="",
        public  ticketId :string="",
        public  vehicleName :string="",
        public  ticketTime :string="",
        public  travelLocation :string="",
        public  hotalName :string="",
        public  hotalroomnumber :string="",
        public  cabname :string="",
        public  cabtime :string="",
    ){}
}