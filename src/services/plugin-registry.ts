import { FastifyInstance } from "fastify";
import userRoutes from "../modules/users/routes/user.routes";
import timeseetRoutes from "../modules/p3l/timesheet/timeseet.routes";

export class PluginRegistry{
    public register(server: FastifyInstance): void{
        server.register(userRoutes)
        server.register(timeseetRoutes)
    }
}