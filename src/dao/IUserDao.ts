import {IUser} from '../models/User';

export default interface IUserDao{
    
    findOne(username: String) : Promise<IUser> ;
    save(username: String, password: String): Promise<IUser>;

}