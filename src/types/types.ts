export interface MessageType {
  type: string;
  data: any;
  id: number;
}

export interface IPlayer {
  name: string;
  password: string;
  index: number;
  gameId?: number | string;
}

export interface IRoom {
  roomId: number,
  roomUsers: {
    name: string,
    index: number,
  }[];
}

export interface IWinner {
  name: string,
  wins: number,
}
