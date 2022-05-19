import axios from "axios";

class Http {
  headers = {
    "Content-Type": "application/json",
  };
  private constructor() {}

  public static getInstance(): Http {
    return new Http();
  }

  public async get<T>(url: string): Promise<T> {
    return await axios.get(url, { headers: this.headers });
  }

  public async post<T>(url: string, body: any): Promise<T> {
    return await axios.post(url, body, { headers: this.headers });
  }

  public async put<T>(url: string, body: any): Promise<T> {
    return await axios.put(url, body, { headers: this.headers });
  }
}

export default Http;
