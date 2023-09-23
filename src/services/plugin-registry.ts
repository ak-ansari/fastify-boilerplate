import { FastifyInstance } from "fastify";
import userRoutes from "../modules/users/routes/user.routes";

export class PluginRegistry{
    public register(server: FastifyInstance): void{
        server.register(userRoutes)
    }
}