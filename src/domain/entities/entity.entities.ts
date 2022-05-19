import UId from "../interfaces/uid.interface";

export class Entity implements UId {
  id: number;

  constructor() {
    this.id = this.generateId();
  }

  generateId(): number {
    return Math.floor(Math.random() * 1000000);
  }
}
