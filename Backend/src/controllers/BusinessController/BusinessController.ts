import { FastifyReply, FastifyRequest } from "fastify";
import {
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

export const getBusinessUserById = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  try {
    const { id } = request.params as any;

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
