import IJwt from '../dependecies/jwt/IJwt';
import {Request, Response, NextFunction} from 'express';

export default class verifyLogged{

    private Jwt: IJwt;
    constructor(jwt : IJwt){
        this.Jwt = jwt;
    }

    public async isLoggedin(req: Request, res: Response , next: NextFunction): Promise<void>{
        
        try {
            const token:string = req.header('x-access-token') || '';

            const id: String = await this.Jwt.verifyToken(token);
             
            res.send('holamundo');
        } catch (error) {
            res.json(error);
        }
    }
}