import { WebSocketServer } from 'ws';
import { handelRegistration } from '../commands/handelRegistration';
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
          handelRegistration(ws, message);
          break;
        default:
          console.log('Unknown message type:', message.type);
          break;
      }
    });
  });
};
