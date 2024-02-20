import { winners } from '../../data/data';
import { WebSocket} from 'ws';

export const updateWinners = (ws: WebSocket) => {
  const updateWinnersResponse = {
    type: 'update_winners',
    data: JSON.stringify(winners),
    id: 0,
  }
  ws.send(JSON.stringify(updateWinnersResponse));
}
