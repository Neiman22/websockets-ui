export interface MessageType {
  type: string;
  data: any;
  id: number;
}

export interface IPlayer {
  name: string;
  password: string;
  playerNumber: number;
  wins: number;
}

export interface IRoom {
  roomId: number;
  roomUsers: {
    name: string,
    index: number,
  }[];
}
