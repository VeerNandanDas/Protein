import { app, httpServer } from "../server/app";
import { registerRoutes } from "../server/routes";

// Ensure routes are registered before handling requests
// We use a promise to track initialization
const setupPromise = registerRoutes(httpServer, app);

export default async function handler(req: any, res: any) {
    await setupPromise;
    return app(req, res);
}
