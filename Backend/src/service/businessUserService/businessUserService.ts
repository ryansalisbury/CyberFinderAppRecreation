import mongoose, { Error } from "mongoose";
import { BusinessUser } from "../../models/BusinessModel/BusinessModel";

export const createBusinessUser = async (userData: any) => {
  try {
    console.log("userData: ", userData);
    console.log("keys in userData: ", Object.keys(userData));
    const newUser = await BusinessUser.create(userData);

    return { user: newUser };
  } catch (error) {
    const err = error as Error;
    throw new Error(`Failed to create user: ${err.message}`);
  }
};

export const getUserById = async (id: string) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid user ID format");
    }

    const user = await BusinessUser.findById(id);

    return { user };
  } catch (error) {
    const err = error as Error;
    throw new Error(`Failed to find user: ${err.message}`);
  }
};
