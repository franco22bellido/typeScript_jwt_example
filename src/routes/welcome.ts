import { Router} from "express";

const router: Router = Router();

import { indexController } from "../controllers/welcomeController";


router.get('/', indexController.welcome);

router.post('/add', (req, res)=>{
    res.send('fomulario');
});


export default router;