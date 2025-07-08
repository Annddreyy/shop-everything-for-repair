import { IUserDB } from './app/repositories/user/user.repository';

declare global {
    namespace Express {
        interface Request {
            user?: IUserDB;
        }
    }
}
