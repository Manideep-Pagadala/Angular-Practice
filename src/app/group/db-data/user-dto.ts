export class UserDTO {

    uname: string ;
    email: string;
    pwd: string ;
    phno: number;

    constructor(a:string, b:string, c:string,d:number){
        this.uname = a;
        this.email = b;
        this.pwd = c;
        this.phno = d;
    }
}
