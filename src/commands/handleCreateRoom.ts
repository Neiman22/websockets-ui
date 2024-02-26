import { IRoom } from "../types/types";
import { roomIdCounter, playersDB, roomsDB } from "../data/data";

export const handleCreateRoom = () => {
  const createdRoom: IRoom = {
    roomId: roomIdCounter + 1,
    roomUsers: [{...playersDB.find(player => player.index === 1)!}]
  }
  roomsDB.push(createdRoom);
  console.log(roomsDB);
}