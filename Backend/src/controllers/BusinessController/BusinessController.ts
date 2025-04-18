import { FastifyReply, FastifyRequest } from "fastify";
import {
  createBusinessQuestionnaire,
  createBusinessUser,
  getUserById,
} from "../../service/businessUserService/businessUserService";

export const someFunction = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  return { message: "Business Route is connected" };
};

export const registerBusinessUser = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    // TO DO create a user type in common folder
    const user = request.body as any;

    const result = await createBusinessUser(user);

    return reply.code(201).send({
      success: true,
      message: "Business User successfully created",
      data: {
        userId: result.user._id,
        username: result.user.username,
      },
    });
  } catch (error) {
    const err = error as Error;
    return reply.code(500).send({
      success: false,
      message: err.message,
    });
  }
};

interface GetBusinessUserInterface {
  id: string;
}

export const getBusinessUserById = async (
  request: FastifyRequest<{ Params: GetBusinessUserInterface }>,
  reply: FastifyReply<{}>
) => {
  try {
    const { id } = request.params;

    const result = await getUserById(id);

    if (!result.user) {
      return reply.code(404).send({
        success: false,
        message: "Business User not found",
      });
    }

    return reply.code(200).send({
      success: true,
      message: "Business User successfully retrieved",
      data: {
        result,
      },
    });
  } catch (error) {
    const err = error as Error;
    return reply.code(500).send({
      success: false,
      message: err.message,
    });
  }
};

export const createQuestionnaire = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    // TO DO create a questionnaire type in common folder
    const questionnaire = request.body as any;

    const result = await createBusinessQuestionnaire(questionnaire);

    return reply.code(201).send({
      success: true,
      message: "Business Questionnaire successfully created",
      data: {
        questionnaireId: result.questionnaire._id,
        businessName: result.questionnaire.businessName,
      },
    });
  } catch (error) {
    const err = error as Error;
    return reply.code(500).send({
      success: false,
      message: err.message,
    });
  }
};
