import { Request } from "../Models/request";

export class RequestService{
    request:Request[];
    constructor(){
        this.request=[
            new Request(101,"D","S","Proof.pdf","Sent")
        ];
    }

    sentrequest(){
        
    }
}