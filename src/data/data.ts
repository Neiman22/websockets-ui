import { IPlayer, IRoom } from "../types/types";

let lastPlayerNumber = 0;

export function incrementLastNumber() {
  lastPlayerNumber++;
}

export function getLastNumber() {
  return lastPlayerNumber;
}

export const rooms: IRoom[] = [];
export const players: IPlayer[] = [];
export const winners = [];