import IJwt from '../dependecies/jwt/IJwt';
import {Request, Response, NextFunction} from 'express';

export default class verifyLogged{

    private Jwt: IJwt;
    constructor(jwt : IJwt){
        this.Jwt = jwt;
    }

    public async isLoggedin(req: Request, res: Response , next: NextFunction): Promise<void>{
        
        try {
            const token:string = req.header('x-access-token') as string;
            const id: string = this.Jwt.verifyToken(token);
            req.userId = id;
            next();
        } catch (error) {
            res.json(error);
        }
    }
    

}