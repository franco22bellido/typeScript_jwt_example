import { Request, Response } from 'express';
import IUserDao from '../dao/IUserDao';
import { IUser } from '../models/User';
import IEcrypt from '../dependecies/encrypt/IEcrypt';
import Ijwt from '../dependecies/jwt/IJwt';

export default class authController {

    private userDao: IUserDao;
    private encriptador: IEcrypt;
    private jwt:Ijwt;
    constructor(injectionUserDao: IUserDao, encriptador: IEcrypt, jwt: Ijwt) {
        this.userDao = injectionUserDao;
        this.encriptador = encriptador;
        this.jwt = jwt
    }

    public async register(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;

        const passwordEncrypt: string = await this.encriptador.EncrypPassword(password);

        await this.userDao.save(username, passwordEncrypt);
        res.json({
            info: "se registró un usuario"
        });
    }


    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;
            const userFound: IUser = await this.userDao.findOne(username);
            
            const verifyPassword: boolean = await this.encriptador.comparePassword(password, userFound.password);
            if (verifyPassword != true) { throw new Error('la contraseña es incorrecta'); }
            
            const token = this.jwt.generateToken(userFound.id);
            res.json({
                token: token
            });
        } catch (error) {
            res.json({ error });
        }
    }
}