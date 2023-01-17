import { Request, Response } from 'express';
import IUserDao from '../dao/IUserDao';
import { IUser } from '../models/User';
import IEcrypt from '../dependecies/encrypt/IEcrypt';

export default class authController {

    private userDao: IUserDao;
    private encriptador: IEcrypt;

    constructor(injectionUserDao: IUserDao, encriptador: IEcrypt) {
        this.userDao = injectionUserDao;
        this.encriptador = encriptador;
    }
    public async register(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body;

        const passwordEncrypt: String = await this.encriptador.EncrypPassword(password);
        await this.userDao.save(username, passwordEncrypt);
    }


    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { username, password } = req.body;
            const userFound: IUser = await this.userDao.findOne(username);
            
            const verifyPassword: boolean = await this.encriptador.comparePassword(password, userFound.password);
            if (verifyPassword != true) { throw new Error('la contraseña es incorrecta'); }
            
        } catch (error) {
            res.json({ error });
        }
    }
}