import { Request, Response } from "express";
import mongoose from "mongoose";
import User, { userSchema } from "../models/User";
import Gender from "../models/Gender";
import Image from "../models/Image";

const UserModel = mongoose.model("User", userSchema);

const loginController = async (req: Request, res: Response) => {
  const newUser = new UserModel({
    created_at: new Date(),
    first_name: "John",
    last_name: "Doe",
    password: "password123",
    phone_number: "1234567890",
    address: JSON.stringify({
      street: "123 Street",
      city: "City",
      state: "State",
      zipCode: "12345",
      country: "Country",
    }),
    email: "john@example.com",
    gender: Gender.Male, // Assuming Gender is an enum
    image: JSON.stringify({
      url: "http://example.com/image.jpg",
      altText: "John Doe", // Assuming this property exists in Image
    }),
    notifications: "Welcome to our platform!",
  });

  try {
    const savedUser = await newUser.save();
    console.log("User created successfully:", savedUser);
  } catch (error) {
    console.error("Error creating user:", error);
  }
  res.send("Login logic executed");
};

export default loginController;
