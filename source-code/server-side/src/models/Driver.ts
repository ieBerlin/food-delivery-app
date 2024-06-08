import Gender from './Gender.js';
import User from './User.js'; 
import Notification from "./Notification.js"
import Rating from "./Rating.js"
import Image from './Image.js';
import Address from './Address.js';
class Driver implements User {
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
    public status: DriverStatus,
    public ratings: Rating[],
    public vehicleType: string,
    public vehicleLicense: string,
    public availability: string,
    public totalDeliveries: number
  ) {}
}

enum DriverStatus {
  Available = 'Available',
  OnDelivery = 'On Delivery',
  Offline = 'Offline',
  Suspended = 'Suspended',
  PendingVerification = 'Pending Verification',
  Banned = 'Banned',
  Busy = 'Busy',
  UnderReview = 'Under Review',
  Active = 'Active'
}



export default Driver;
