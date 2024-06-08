import MenuItem from "./MenuItem.js";

class Order {
    constructor(
        public id: number,
        public orderDate: Date,
        public items: MenuItem[],
        public totalAmount: number
    ) {}

}

export default Order;
