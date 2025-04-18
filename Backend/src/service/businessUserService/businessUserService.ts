import mongoose, { Error } from "mongoose";
import {
  BusinessQuestionnaire,
  BusinessUser,
} from "../../models/BusinessModel/BusinessModel";

export const createBusinessUser = async (userData: any) => {
  try {
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

export const createBusinessQuestionnaire = async (questionnaireData: any) => {
  try {
    const newQuestionnaire = await BusinessQuestionnaire.create(
      questionnaireData
    );

    return { questionnaire: newQuestionnaire };
  } catch (error) {
    const err = error as Error;
    throw new Error(`Failed to create user: ${err.message}`);
  }
};
