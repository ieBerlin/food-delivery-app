import { Request, Response } from "express";
import Customer, { customerSchema, CustomerStatus } from "../models/Customer";
import Address from "../models/Address";
import Gender from "../models/Gender";
import Image from "../models/Image";
import mongoose from "mongoose";

const signupController = async(req: Request, res: Response) => {

  const { _id, created_at, first_name, last_name, password, phone_number, address, email, gender, image, notifications, status } = req.body;

  // Create an instance of Address, Gender, and Image if necessary
  const addressInstance = new Address(address.street, address.city, address.state, address.postal_code, address.country);
  const imageInstance = new Image(image.url, image.alt_text);
  const customer = new Customer(
    new Date(created_at), 
    first_name,
    last_name,
    password,
    phone_number,
    addressInstance,
    email,
    gender as Gender,
    imageInstance as Image,
    notifications,
    status as CustomerStatus
  );
const customerSchemaMODEL =  mongoose.model('Customer',customerSchema);
const dbData  = new customerSchemaMODEL(customer);
await dbData.save()
res.send('hello user!');

};
export default signupController;
