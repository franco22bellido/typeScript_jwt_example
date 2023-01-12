import IEcrypt from "./IEcrypt";

export default class BcryptImpl implements IEcrypt{
    async EncrypPassword(password: String): Promise<String> {
        throw new Error("Method not implemented.");
    }
    async comparePassword(password: String, passwordEncrypted: String): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}