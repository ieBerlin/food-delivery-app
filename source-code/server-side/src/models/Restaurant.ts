import Address from "./Address";
import Image from "./Image";
import MenuItem from "./MenuItem";
import Order from "./Order";
import WorkingHour from "./WorkingHour";
enum CuisineType {
    Italian = "Italian",
    Mexican = "Mexican",
    Chinese = "Chinese",
    Indian = "Indian",
    Japanese = "Japanese",
    American = "American",
    French = "French",
    Mediterranean = "Mediterranean",
}
enum RestaurantStatus {
    Open = "Open",
    Close = "Close",
    Suspended = "Suspended",
    Pending = "Pending",
    PermanentlyClosed = "Permanently Closed",
    UnderReview = "Under Review",
}
class Restaurant {
    constructor(
        public id: number,
        public name: string,
        public address: Address,
        public phoneNumbers: number[],
        public emails: string[],
        public menu: MenuItem[],
        public cuisineType: CuisineType,
        public images: Image[],
        public numberOfOrders: Order[],
        public status: RestaurantStatus,
        public workingHours: WorkingHour[],
        public revenue: number
    ) {}

 
}

export default Restaurant ;