import { WebSocketServer } from 'ws';
import { commandsHandler } from '../commands/commandsHandler';

export const startWebSocketServer = () => {
  const WS_PORT = 3000;
  const wss = new WebSocketServer({ port: WS_PORT });
  console.log(`WebSocket server started on port ${WS_PORT}`);

  wss.on('connection', (ws) => {
    ws.on('error', console.error);
  
    ws.on('message', (data: string) => {
      const resp = commandsHandler(data);
      console.log(resp);
      ws.send(resp);
    });
  });
};
