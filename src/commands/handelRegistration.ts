import { WebSocket} from 'ws';
import { MessageType, IPlayer } from '../types/types';
import { getLastNumber, incrementLastNumber, players, rooms, winners } from '../data/data';

export const handelRegistration = (ws: WebSocket, message: MessageType) => {
  incrementLastNumber();
  const player: IPlayer = {
    name: JSON.parse(message.data).name,
    password: JSON.parse(message.data).password,
    playerNumber: getLastNumber(),
    wins: 0,
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
  players.push(player);

  const updateRoomResponse = {
    type: 'update_room',
    data: JSON.stringify(rooms.filter(room => room.roomUsers.length === 1)),
    id: 0,
  }
  ws.send(JSON.stringify(updateRoomResponse));

  const updateWinnersResponse = {
    type: 'update_winners',
    data: JSON.stringify(winners),
    id: 0,
  }
  ws.send(JSON.stringify(updateWinnersResponse));
}
