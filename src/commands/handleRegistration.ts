import { WebSocket } from "ws";
import { MessageType } from "../types/types";
import { playersDB } from "../data/data";
import { IPlayer } from "../types/types";
import { sendResponse } from "../utils/sendResponse";

export const handleRegistration = (ws: WebSocket, message: MessageType) => {
  const index = playersDB.length;
  const player: IPlayer = {
    name: JSON.parse(message.data).name,
    password: JSON.parse(message.data).password,
    index: index + 1, 
  };
  playersDB.push(player);

  const registrationResponse = {
    name: player.name,
    index: player.index,
    error: false,
    errorText: '',
  }
  sendResponse(ws, 'reg', registrationResponse);
}