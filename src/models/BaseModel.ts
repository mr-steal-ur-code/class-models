export default class BaseModel {
  #id: string = crypto.randomUUID();
  #createdAt: string = new Date().toDateString();
  constructor() {
  }
  getId() {
    return this.#id;
  }
  getCreatedAt() {
    return this.#createdAt;
  }
}