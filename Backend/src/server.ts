import dotenv from "dotenv";
import Fastify from "fastify";
import mongoose from "mongoose";
import cors from "@fastify/cors";
import BusinessRoutes from "./routes/BusinessRoutes/BusinessRoutes";

dotenv.config();

const fastify = Fastify({ logger: true });

// Register the CORS plugin
fastify.register(cors, {
  origin: "*", // or ['http://localhost:5174'] if you only want to allow that domain
});

// connect to MongoDB
mongoose.connect(process.env.MONGO_URL || "");

fastify.register(BusinessRoutes, { prefix: "/business" });

// Test route
fastify.get("/test", async (request, reply) => {
  return { message: "MongoDB is connected" };
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Backend is running at ${address}`);
});
