import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import plugin from "fastify-plugin";
import { UserController } from "../controller/user.controller";
export default plugin((server: FastifyInstance, opts: FastifyPluginOptions,next: Function)=>{
    const _userController= new UserController()
    server.route({
        method: "POST",
        url:"/api/add-user",
        handler: async (req: FastifyRequest, reply: FastifyReply)=>{
            await _userController.addUser(server, req, reply);
        }
    }),
    next()
})