enum RatingValue {
    One = 1,
    Two = 2,
    Three = 3,
    Four = 4,
    Five = 5,
  }
  
  enum RatingType {
    Restaurant = "restaurant",
    Driver = "driver",
  }
  
  class Rating {
    constructor(
        public id: number,
        public rating: RatingValue,
        public review: string,
        public created_at: Date,
        public userId: number,
        public itemId: number,
        public type: RatingType
    ) {}
  }
  
  export default Rating;
  