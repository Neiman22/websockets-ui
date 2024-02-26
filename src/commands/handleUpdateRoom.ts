import { WebSocket } from "ws";
import { roomsDB } from "../data/data";
import { sendResponse } from "../utils/sendResponse";

export const handleUpdateRoom = (ws: WebSocket) => {
  const roomsWithOnlyOnePlayer = roomsDB.filter(room => room.roomUsers.length === 1);
  sendResponse(ws, 'update_room', roomsWithOnlyOnePlayer);
}