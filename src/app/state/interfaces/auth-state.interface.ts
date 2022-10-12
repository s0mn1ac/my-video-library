/* Interfaces */
import { IAuth } from 'src/app/shared/interfaces/auth.interface';
import { IMessage } from 'src/app/shared/interfaces/message.interface';
import { ISession } from 'src/app/shared/interfaces/session.interface';

export interface IAuthState {
  auth: IAuth | null;
  session: ISession | null;
  loading: boolean;
  message: IMessage | null;
}
