import { WebSocketServer, WebSocket } from 'ws';
import { MessageType } from '../types/types';
import { handleRegistration } from '../commands/handleRegistration';
import { handleUpdateRoom } from '../commands/handleUpdateRoom';
import { handleUpdateWinners } from '../commands/handleUpdateWinners';
import { handleCreateRoom } from '../commands/handleCreateRoom';
import { handleAddUserToRoom } from '../commands/handleAddUserToRoom';
import { handleCreateGame } from '../commands/handleCreateGame';

const WS_PORT = 3000;

export const startWebSocketServer = () => {
  const wss = new WebSocketServer({ port: WS_PORT });
  console.log(`WebSocket server started on port ${WS_PORT} port!`);

  wss.on('connection', (ws) => {
    ws.on('error', console.error);
  
    ws.on('message', (data: string) => {
      const message: MessageType = JSON.parse(data);

      switch (message.type) {
        case 'reg':
          handleRegistration(ws, message);
          handleUpdateRoom(ws);
          handleUpdateWinners(ws);
          break;
        case 'create_room':
          handleCreateRoom();
          handleUpdateRoom(ws);
          break;
        case 'add_user_to_room':
          handleAddUserToRoom(message);
          handleUpdateRoom(ws);
          handleCreateGame();
          break;
        default:
          console.log('Unknown message type:', message.type);
          break;
      }
    });
  });
};