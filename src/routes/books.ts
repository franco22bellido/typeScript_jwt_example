import { Router, Request, Response, request, response} from "express";

const router: Router = Router();

import {booksController} from '../injecting/injections';

router.get('/', (req: Request, res: Response)=>{
    booksController.listarBook(req, res);
});
router.get('/add', (req:Request, res: Response)=>{
    booksController.renderFormBook(req, res);
});
router.post('/add',(req:Request, res: Response)=>{
    booksController.saveBook(req, res);
});
router.get('/delete/:_id', (req:Request, res:Response)=>{
    booksController.deleteById(req, res);
});

export default router;