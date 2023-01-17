import { Router} from "express";

const router: Router = Router();

import { indexController } from "../controllers/welcomeController";
import {verifilog} from '../injecting/injections';

router.get('/', indexController.welcome);

router.get('/vienven', (req, res, next)=>{
    verifilog.isLoggedin(req, res, next);
});


export default router;