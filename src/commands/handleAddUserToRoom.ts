import { MessageType } from "../types/types";
import { roomsDB, playersDB } from "../data/data";

export const handleAddUserToRoom = (message: MessageType) => {
  const indexRoom = JSON.parse(message.data).indexRoom;
  const room = roomsDB[indexRoom];

  room.roomUsers.push({...playersDB.find(player => player.index === 2)!});
  console.log(playersDB);
  console.log(roomsDB);

  roomsDB.splice(indexRoom, 1);
}