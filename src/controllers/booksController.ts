import { Request, Response } from "express";
import SchemaBook, {IBook} from '../models/Book';
import IBookDao from "../dao/IBookDao";


export class BooksController {
    
    private bookDao: IBookDao;
    constructor(injectionBookDao: IBookDao){
        this.bookDao = injectionBookDao;

    }
    
    public async listarBook(req: Request, res: Response): Promise<void> {
        const books: IBook[] = await this.bookDao.findAll();
        res.render('books/listar');
    }
    

    public async saveBook (req: Request, res: Response) : Promise<void> {
        const {title, author, isbn} = req.body;
        const book: IBook = new SchemaBook(title, author, isbn);
    
        await book.save();
        res.redirect('/books');
    }     


    public renderFormBook (req: Request, res: Response): void{
        
        res.render('books/add', {
            title: "add a book"
        });
        
    }  
    
}
