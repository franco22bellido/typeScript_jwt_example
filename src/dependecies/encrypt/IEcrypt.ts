export default interface IEcrypt{

    EncrypPassword(password: string): Promise<string>;
    comparePassword(password: string, passwordEncrypted: string): Promise<boolean>;
}