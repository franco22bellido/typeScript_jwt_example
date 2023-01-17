import mongoose, {Schema, model} from "mongoose";

export interface IUser extends mongoose.Document{
    username: string;
    password : string;
}

const userSchema = new Schema({
    username: {type: String,
                unique: true,
                required: true},
    password: String
});

export default model<IUser>('user', userSchema);