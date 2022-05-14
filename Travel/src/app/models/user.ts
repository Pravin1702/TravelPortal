export class User{
    
    constructor(
        public  employeeId:number=0,
        public  name :string="",
        public  password :string="",
        public  role :string="",
        public  age :number=0,
        public  birthday :string="",
        public  gender :string="",
        public  mobile :string="",
        public  email :string="",
        public  address :string="",
        public  managerId :string="",
        public  departmentId :string="",
        public  deprtmentHeadId :string="",
    ){}
}