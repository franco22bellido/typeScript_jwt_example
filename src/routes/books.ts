import { Router} from "express";

const router: Router = Router();

// import {BooksController} from '../controllers/booksController';
import {booksController} from '../injections/injected';

// //injections:
// import implBookOne from '../dao/bookImpls/implBookOne';
// import IbookDao from "../dao/IBookDao";

// let injection:IbookDao = new implBookOne();
// let booksController = new BooksController(injection);


router.get('/', booksController.listarBook);
router.get('/add', booksController.renderFormBook);
router.post('/add', booksController.saveBook);

export default router;