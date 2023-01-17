import { Router} from "express";

import {verifilog} from '../injecting/injections';
import {authController} from '../injecting/injections';

const router: Router = Router();

router.get('/protectedroute',(req,res,next)=>{verifilog.isLoggedin(req,res,next)});
router.post('/register', (req,res)=>{authController.register(req, res)});
router.post('/login', (req, res)=>{authController.login(req, res)});


export default router;