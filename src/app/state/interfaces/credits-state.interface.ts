/* Interfaces */
import { ICredits } from 'src/app/shared/interfaces/credits.interface';
import { IMessage } from 'src/app/shared/interfaces/message.interface';

export interface ICreditsState {
  credits: ICredits | null;
  loading: boolean;
  message: IMessage | null;
}
