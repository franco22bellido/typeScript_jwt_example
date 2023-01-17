import {BooksController} from '../controllers/booksController';
import AuthController from '../controllers/authController';
import verifyLogged from '../middlewares/verifyLoggedin';

//injections:
import IbookDao from "../dao/IBookDao";
import implBookOne from '../dao/bookImpls/implBookOne';

/*injectando a booksController */
const injection:IbookDao = new implBookOne();
export const booksController = new BooksController(injection);


//injections:
import IEcrypt from '../dependecies/encrypt/IEcrypt';
import BcryptImpl from '../dependecies/encrypt/bcryptImpl'; 
import IUserDao from '../dao/IUserDao';
import implUserOne from '../dao/UserImpls/ImplUserOne';

//injections
import IJwt from '../dependecies/jwt/IJwt' 
import JwtImpl from '../dependecies/jwt/jwtImpl' 
/**injectando a un midleware */

/*injectando a authController */
const userDao:IUserDao = new implUserOne();
const bcrypt:IEcrypt = new BcryptImpl();
const jwt:IJwt = new JwtImpl('palabrasecreta');
export const authController = new AuthController(userDao,bcrypt, jwt);


export const verifilog = new verifyLogged(jwt);



