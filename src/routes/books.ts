import { Router, Request, Response, request, response} from "express";

const router: Router = Router();

import {booksController} from '../injections/injections';

router.get('/', booksController.listarBook);
router.get('/add',);
router.post('/add',);

export default router;