import { FastifyPluginAsync } from "fastify";
import {
  createQuestionnaire,
  getBusinessUserById,
  registerBusinessUser,
  someFunction,
} from "../../controllers/BusinessController/BusinessController";

const BusinessRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.get("/test", someFunction);
  fastify.post("/create_user", registerBusinessUser);
  fastify.get("/get_user/:id", getBusinessUserById);
  fastify.post("/create_questionnaire/:id", createQuestionnaire);
};

export default BusinessRoutes;
