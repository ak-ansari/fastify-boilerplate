import { FastifyInstance, FastifyPluginCallback, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import plugin from "fastify-plugin";
import { TimesheetController } from "./timesheet.controller";
export default plugin((server: FastifyInstance, opts: FastifyPluginOptions,next: Function)=>{
    const _timesheetCont= new TimesheetController()
    server.route({
        method: "GET",
        url:"/api/get-leaves-data/:finYear",
        handler: async (req: FastifyRequest, reply: FastifyReply)=>{
           const result=  await _timesheetCont.getUserLeavesYearWise(server, req);
            reply.send(result);
        }
    }),
    server.route({
        method: "GET",
        url:"/api/get-leaves-balance/:finYear",
        handler: async (req: FastifyRequest, reply: FastifyReply)=>{
           const result=  await _timesheetCont.getUserLeaveBalance(server, req);
            reply.send(result);
        }
    }),
    server.route({
        method: "POST",
        url:"/api/set-ids",
        handler: async (req: FastifyRequest, reply: FastifyReply)=>{
           const result=  await _timesheetCont.setUserIds(server, req);
            reply.send(result);
        }
    }),
    next()
})