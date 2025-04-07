import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { error } from "console";
import BusinessRoutes from "./routes/BusinessRoutes/BusinessRoutes";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class Application {
  server: FastifyInstance;

  constructor() {
    this.server = fastify({ logger: true });
  }

  async registerCors() {
    this.server.register(cors, { origin: "*" });
  }

  async startHttpServer() {
    try {
      const address = await this.server.listen({ port: 3000 });
      console.log(`Backend is running at ${address}`);
    } catch (err) {
      console.error(error);
      process.exit(1);
    }
  }

  async registerRoutes() {
    this.server.register(BusinessRoutes, { prefix: "/business" });
  }

  async connectToDB() {
    const dbURL = process.env.MONGO_URL;
    mongoose
      .connect(dbURL || "")
      .then(() => console.log("MongoDB is successfully connected"))
      .catch(() => console.error("MongoDB could not connect"));
  }

  async main() {
    await this.connectToDB();
    await this.registerCors();
    await this.registerRoutes();
    await this.startHttpServer();
  }
}

const appInstance = new Application();
appInstance.main();
