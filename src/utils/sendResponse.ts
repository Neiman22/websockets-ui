import { WebSocket } from 'ws';

export const sendResponse = (ws: WebSocket, type: string, data: any) => {
  const response = { 
    type: type,
    data: JSON.stringify(data), 
    id: 0,
  };
  ws.send(JSON.stringify(response));
}