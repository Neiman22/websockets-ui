import { WebSocket} from 'ws';
import { MessageType, IPlayer, IRoom } from '../types/types';
import { getLastNumber, incrementLastNumber, rooms } from '../data/data';

export const handelRegistration = (ws: WebSocket, message: MessageType) => {
  incrementLastNumber();
  const player: IPlayer = {
    name: JSON.parse(message.data).name,
    password: JSON.parse(message.data).password,
    playerNumber: getLastNumber(),
  }

  const registrationResponse = {
    type: 'reg',
    data: JSON.stringify({
      name: player.name,
      index: player.playerNumber,
      error: false,
      errorText: '',
    }),
    id: 0,
  }
  ws.send(JSON.stringify(registrationResponse));

  const updateRoomResponse = {
    type: 'update_room',
    data: JSON.stringify(rooms.filter(room => room.roomUsers.length === 1)),
    id: 0,
  }
  console.log(updateRoomResponse);
  ws.send(JSON.stringify(updateRoomResponse));
}
