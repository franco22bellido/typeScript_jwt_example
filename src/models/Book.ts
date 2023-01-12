import mongoose, {Schema, model} from "mongoose";

export interface IBook extends mongoose.Document{
    title :String,
    author : String,
    isbn: String
}


const bookSchema: Schema = new Schema({
    title: String,
    author: String,
    isbn: String
})

export default model<IBook>("Book", bookSchema);