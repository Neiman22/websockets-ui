import { WebSocket } from "ws";
import { winnersDB } from "../data/data";
import { sendResponse } from "../utils/sendResponse";

export const handleUpdateWinners = (ws: WebSocket) => {
  sendResponse(ws, 'update_winners', winnersDB);
}