import { Schema } from "mongoose";
import Address from "./Address";
import Gender from "./Gender";
import Image from "./Image";
import User from "./User";
export enum CustomerStatus {
  Active = "Active",
  Inactive = "Inactive",
  Suspended = "Suspended",
  Deleted = "Deleted",
}
class Customer implements User {
  constructor(
    public created_at: Date,
    public first_name: string,
    public last_name: string,
    public password: string,
    public phone_number: string,
    public address: Address,
    public email: string,
    public gender: Gender,
    public image: Image,
    public notifications: String,
    public status: CustomerStatus
  ) {}
}
export const customerSchema: Schema<Customer> = new Schema<Customer>({
  status: {
    type: String,
    required: true,
    loyalityPoints: Number,
    favoritesRestaurants: String,
    ordersHistory: String,
  },
});

export default Customer;
