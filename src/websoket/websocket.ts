import * as WebSocket from 'ws';
import { commandsHandler } from '../commands/commandsHandler';

export const startWebSocketServer = () => {
  const WS_PORT = 3000;
  const wss = new WebSocket.Server({ port: WS_PORT });
  console.log(`WebSocket server started on port ${WS_PORT}`);

  wss.on('connection', function connection(ws) {
    console.log('WebSocket connection established');

    ws.on('message', function incoming(message: string) {
      console.log('Received message:', message);
    });

    ws.on('close', function close() {
      console.log('WebSocket connection closed');
    });
  });
};