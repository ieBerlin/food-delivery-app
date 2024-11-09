import Address from "./Address.js";
import Gender from "./Gender.js";
import Image from "./Image.js";
import { Schema } from "mongoose";
import Notification from './Notification';
interface User {
  _id?: string;
  created_at: Date;
  first_name: string;
  last_name: string;
  password: string;
  phone_number: string;
  address: Address;
  email: string;
  gender: Gender;
  image: Image;
  notifications: String;
}
export const userSchema: Schema<User> = new Schema<User>({
  created_at: { type: Date, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  image: { type: String },
  notifications: { type: String },
});

export default User;
