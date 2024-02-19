import { IRoom } from "../types/types";

let lastNumber = 0;

export function incrementLastNumber() {
  lastNumber++;
}

export function getLastNumber() {
  return lastNumber;
}

export const rooms: IRoom[] = [];