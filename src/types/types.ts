export interface Player {
  name: string;
  password: string;
}

export interface WebSocketMessage {
  type: string;
  data: any;
  id: number;
}

export interface RegistrationResponse {
  type: string;
  data: {
      name: string;
      index?: number;
      error: boolean;
      errorText?: string;
  };
  id: number;
}

