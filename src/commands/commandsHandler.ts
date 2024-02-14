import * as WebSocket from 'ws';
import { WebSocketMessage } from '../types/types';

export const commandsHandler = (ws: WebSocket, message: string) => {
  try {
    const parsedMessage: WebSocketMessage = JSON.parse(message);
    handleMessage(ws, parsedMessage);
  } catch (error) {
    console.error('Error parsing message:', error);
  }
}

const handleMessage = (ws: WebSocket, message: WebSocketMessage) => {
  console.log('Handle message');
}