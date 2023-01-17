import IJwt from './IJwt';
import jwt from 'jsonwebtoken'

interface Ipayload{
    _id : string;
    iat: number;
    exp: number;

}


export default class jwtImpl implements IJwt{

    secret: string;
    constructor(secret : string){
        this.secret= secret
    }
    generateToken(Id: String): string {

        const token:string =  jwt.sign({Id}, this.secret, {expiresIn: "1d"});
        return token;
    }
    verifyToken(token: string): string {
        const payload = jwt.verify(token, this.secret) as Ipayload;

        return payload._id;
        
    }

}