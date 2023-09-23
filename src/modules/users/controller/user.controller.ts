import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/user.service";
import { IUser } from "../static/user.interface";

export class UserController{
    private _userService: UserService;
    constructor(){
        this._userService = new UserService();
    }
    public async addUser(
        server: FastifyInstance,
        req: FastifyRequest,
        reply: FastifyReply
    ): Promise<void>{
        try {
            const user = await this._userService.addUser(req.body as IUser)
            reply.send(user);
            return;
        } catch (error: any) {
            reply.send({
                error,
                status: 500,
                msg: error.message
            })
        }
    }
}