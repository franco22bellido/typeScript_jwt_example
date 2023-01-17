import IJwt from './IJwt';


export default class jwt implements IJwt{

    secret: String;
    constructor(secret : String){
        this.secret= secret
    }
    generateToken(Id: String): String {
        throw new Error('Method not implemented.');
    }
    async verifyToken(token: string): Promise<string> {
        if(token === 'token por aca'){
            return 'holamundo'

        }else{
            throw new Error('error por aca');

        }
    }

}