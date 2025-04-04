import { FastifyPluginAsync } from "fastify";
import {
  getBusinessUserById,
  registerBusinessUser,
  someFunction,
} from "../../controllers/BusinessController/BusinessController";

const BusinessRoutes: FastifyPluginAsync = async (fastify, options) => {
  fastify.get("/test", someFunction);
  fastify.post("/create_user", registerBusinessUser);
  fastify.get("/get_user/:id", getBusinessUserById);
};

export default BusinessRoutes;
