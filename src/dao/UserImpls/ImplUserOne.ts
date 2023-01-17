import userSchema, { IUser } from '../../models/User';
import IUserDao from '../IUserDao'; 


export default class implUserOne implements IUserDao{

    public async findOne(username: string): Promise<IUser> {

        const user:IUser = await userSchema.findOne({username}).lean();

        return user;
    }
    public async save(username: string, password: string): Promise<IUser> {
        const newUser:IUser = new userSchema();
        newUser.username = username;
        newUser.password = password;
        await newUser.save();
        return newUser;
    }
}