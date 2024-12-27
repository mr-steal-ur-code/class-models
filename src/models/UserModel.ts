import BaseModel from "./BaseModel";

export default class UserModel extends BaseModel {
  firstName: string;
  lastName: string;
  phone: string;
  constructor(firstName: string, lastName: string, phone?: string) {
    super()
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone ?? "";
  }
  greet() {
    return `Hello ${this.firstName} ${this.lastName}!`
  }
}