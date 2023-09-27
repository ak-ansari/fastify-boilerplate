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
    server.route({
        method: "PATCH",
        url:"/api/update-user",
        handler: async (req: FastifyRequest, reply: FastifyReply)=>{
            await _userController.updateUser(server, req, reply);
        }
    }),
    server.route({
        method: "DELETE",
        url:"/api/delete-user/:id",
        handler: async (req: FastifyRequest, reply: FastifyReply)=>{
            await _userController.deleteUser(server, req, reply);
        }
    }),
    next()
})