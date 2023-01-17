import IEcrypt from "./IEcrypt";
import bcrypt from 'bcrypt';

export default class BcryptImpl implements IEcrypt{

    async EncrypPassword(password: string): Promise<string> {
        const salt:string = await bcrypt.genSalt(10);
        const passwordEncrypted:string  = await bcrypt.hash(password, salt);
        return passwordEncrypted;
    }
    async comparePassword(password: string, passwordEncrypted: string): Promise<boolean> {
        const compared:boolean = await bcrypt.compare(password, passwordEncrypted);
        return compared;
    }
}