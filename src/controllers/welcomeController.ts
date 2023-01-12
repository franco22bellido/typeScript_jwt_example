import {Request, Response} from 'express';


class welcomeController {

    public welcome (req: Request ,res: Response) {
        res.render('index', {title: 'welcome to my app'});
    }

}

export const indexController = new welcomeController();

