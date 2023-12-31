import fastify, { FastifyRequest, FastifyReply } from "fastify";
import env from "dotenv";
import { DBConnectionService } from "./db/db";
import { PluginRegistry } from "./services/plugin-registry";
const envConfig = env.config();

const app = fastify({logger: false});
const _pluginRegistry = new PluginRegistry();
_pluginRegistry.register(app)
const PORT = (process.env.PORT as unknown as number) || 5000;
app.addHook("onRequest",(req, res, next)=>{
  (global as any).requestContext = {userInfo: {_id:"650ed6975bd5ce757b7f6fbc"}}
  next()
})


const start = async () => {
  try {
    const dbService = new DBConnectionService(); 
    await dbService.connect();
    app.listen({ port: PORT }, (err) => {
        if (err) {
          console.log(err);
          process.exit(1);
        } else {
          console.log(`server is listing on PORT ${PORT}`);
        }
      });
  } catch (err) {
    console.log(err);
    process.exit(1)
  }
};
app.get("/", (req: FastifyRequest, res: FastifyReply) => res.send("ok"));
start()
