export class RegisterEmployee{
    constructor(
        public EmpId?:number,
        public Name?:string,
        public Role?:string,
        public Password?:string,
        public ManagerId?:string,
        public Age?:string,
        public Mobile?:string,
        public Email?:string,
        public Region?:string,
    ){
    }
}