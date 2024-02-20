import { players, rooms } from "../../data/data"
import { IRoom } from "../../types/types"

export const createRoom = () => {
  const createdRoom: IRoom = {
    roomId: 1,
    roomUsers: 
      [
        {
          name: players[0].name,
          index: players[0].playerNumber,
        }
      ]
  }
  rooms.push(createdRoom);
}