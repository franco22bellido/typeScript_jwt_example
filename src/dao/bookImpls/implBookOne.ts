import SchemaBook, {IBook} from '../../models/Book';
import iBookDao from '../IBookDao';

export default class implBookOne implements iBookDao{
    
    async findAll(): Promise<IBook[]> {
        const books:IBook[] = await SchemaBook.find().lean();
        return books;
    }
    async save(title: String, author: String, isbn: String): Promise<IBook> {
        
        const book:IBook = new SchemaBook();
        book.author = author;
        book.isbn = isbn;
        book.title = title;
        let bookSaved:IBook = await book.save();
        return bookSaved;
    }
    async deleteById(id: String): Promise<void> {
        await SchemaBook.findByIdAndRemove(id);
    }
}