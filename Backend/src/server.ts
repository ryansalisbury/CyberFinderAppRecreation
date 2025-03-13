import dotenv from "dotenv";
import Fastify from "fastify";
import mongoose from "mongoose";
import cors from "@fastify/cors";

dotenv.config();

const fastify = Fastify({ logger: true });

// Register the CORS plugin
fastify.register(cors, {
  origin: "*", // or ['http://localhost:5174'] if you only want to allow that domain
});

// connect up MongoDB
const MONGO_URI =
  "mongodb+srv://ryansalisbury10:xnDmAaoNznWfASID@cyberfindercluster.q9j6w.mongodb.net/?retryWrites=true&w=majority&appName=CyberFinderCluster";

mongoose.connect(MONGO_URI);

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
