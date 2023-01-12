import SchemaBook, {IBook} from '../models/Book';

export default interface IbookDao{
    
    findAll(): Promise<IBook[]>;
    save(title: String, author: String, isbn:String): Promise<IBook>;
    deleteById(id: String): void;
}