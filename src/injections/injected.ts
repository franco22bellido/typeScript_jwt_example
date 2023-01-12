import {BooksController} from '../controllers/booksController';

//injections:
import implBookOne from '../dao/bookImpls/implBookOne';
import IbookDao from "../dao/IBookDao";

/*injectando a booksController */
const injection:IbookDao = new implBookOne();
export const booksController = new BooksController(injection);