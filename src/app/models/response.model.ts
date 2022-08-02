import {User} from "./user.model";

export interface Response<T> {
  success: boolean;
  data: T;
  message: Message;
}

export interface TokenResponse {
  token: string;
  refreshToken: string;
  expiration: Date;
  user: User;
}

export interface Data {
  tokenResponse: TokenResponse;
  authorized: boolean;
}

export interface Message {
  text: string;
  type: string;
}

