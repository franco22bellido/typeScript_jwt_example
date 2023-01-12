export default interface IEcrypt{

    EncrypPassword(password: String): Promise<String>;
    comparePassword(password: String, passwordEncrypted: String): Promise<boolean>;
}