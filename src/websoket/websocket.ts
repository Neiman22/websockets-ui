import { WebSocketServer } from 'ws';
import { handleReg, updateRoom, updateWinners, createRoom } from '../commands/handleCommands';
import { MessageType } from '../types/types';

export const startWebSocketServer = () => {
  const WS_PORT = 3000;
  const wss = new WebSocketServer({ port: WS_PORT });
  console.log(`WebSocket server started on port ${WS_PORT}`);

  wss.on('connection', (ws) => {
    ws.on('error', console.error);
  
    ws.on('message', (data: string) => {
      const message: MessageType = JSON.parse(data);

      switch (message.type) {
        case 'reg':
          handleReg(ws, message);
          updateRoom(ws);
          updateWinners(ws);
          break;
        case 'create_room':
          createRoom();
          updateRoom(ws);
          break;
        default:
          console.log('Unknown message type:', message.type);
          break;
      }
    });
  });
};
