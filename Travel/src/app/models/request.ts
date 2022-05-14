export class Request{
    
    constructor(
        public travelId:number=0,
        public  employeeId:number=0,
        public  name :string="",
        public  reason :string="",
        public  proof :string="",
        public  loc :string="",
        public  isLocal :string="",
        public  nDays :number=0,
        public  fromDate :string="",
        public  toDate :string="",
        public  managerapp:number=0,
        public  departapp:number=0,
        public  ticket :string="",
    ){}
}