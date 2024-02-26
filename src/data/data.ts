import { IPlayer, IRoom, IWinner } from "../types/types";

export const playersDB: IPlayer[] = [];
export const roomsDB: IRoom[] = [];
export const winnersDB: IWinner[] = [];
export let roomIdCounter = 0;