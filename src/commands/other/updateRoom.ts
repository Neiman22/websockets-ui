import { rooms } from '../../data/data';
import { WebSocket} from 'ws';

export const updateRoom = (ws: WebSocket) => {
  const updateRoomResponse = {
    type: 'update_room',
    data: JSON.stringify(rooms.filter(room => room.roomUsers.length === 1)),
    id: 0,
  }
  ws.send(JSON.stringify(updateRoomResponse));
}
