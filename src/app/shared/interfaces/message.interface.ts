/* Enums */
import { MessageType } from "../enums/message-type.enum";

export interface IMessage {
  type: MessageType;
  key: string;
  error: any;
}
