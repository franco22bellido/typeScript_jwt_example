
export default interface jwt{

    secret: String
    generateToken(Id: String): string;

    /**esto haria una busqueda a la db
     * si el usuario no existe retornaria error.
     * en caso de que exista retorna el id
     */
    verifyToken(token: string): string;

}