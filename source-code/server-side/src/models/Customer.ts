import Notification from "./Notification.js"
import Gender from "./Gender.js"
import User from "./User.js"
import Image from "./Image.js"
import Address from "./Address.js";
class Customer implements User {
  constructor(
    public id: number,
    public created_at: Date,
    public first_name: string,
    public last_name: string,
    public password: string,
    public phone_number: string,
    public address: Address,
    public email: string,
    public gender: Gender,
    public image: Image,
    public notifications: Notification[],
    public status: CustomerStatus
  ) {}
}

enum CustomerStatus {
  Active = "Active",
  Inactive = "Inactive",
  Suspended = "Suspended",
  Deleted = "Deleted",
}
export default Customer ;