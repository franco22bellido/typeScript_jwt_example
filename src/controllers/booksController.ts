import { Request, Response } from "express";
import SchemaBook, {Book} from '../models/Book';


class BooksController {
    
    public async listarBook(req: Request, res: Response): Promise<void> {
        const books: Book[] = await SchemaBook.find();
        res.render('books/listar', {books});
    }


    public renderFormBook (req: Request, res: Response): void{

        res.render('books/add', {
            title: "add a book"
        });

    }  
    public async saveBook (req: Request, res: Response) : Promise<void> {
        const {title, author, isbn} = req.body;
        const book: Book = new SchemaBook(title, author, isbn);

        await book.save();
        res.redirect('/books');
    }     
}

export const booksController =  new BooksController();