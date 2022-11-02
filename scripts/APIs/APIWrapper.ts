import { BASE_URL } from "./APIEndpoints.constants";

type method = "GET" | "POST";

export class APIWrapper {
  baseURL: string;
  method: method;

  constructor() {
    this.baseURL = BASE_URL;
    this.method = "GET";
  }
}
