import Address from "./Address.js";
import Gender from "./Gender.js";
import Image from "./Image.js";
import Notification from "./Notification.js";

interface User {
  id: number;
  created_at: Date;
  first_name: string;
  last_name: string;
  password: string;
  phone_number: string;
  address: Address;
  email: string;
  gender: Gender;
  image: Image;
  notifications: Notification[];
}

export default User;
