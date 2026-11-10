import { Elysia } from "elysia";
import { healthRoutes } from "./routes/health";
import { userRoutes } from "./routes/users";

const port = Number(process.env.PORT) || 3000;

const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Elysia + Drizzle + MySQL API",
    documentation: "/health",
  }))
  .use(healthRoutes)
  .use(userRoutes)
  .listen(port);

console.log(`🦊 Elysia server is running at http://${app.server?.hostname}:${app.server?.port}`);

export { app };
export default app;
export type App = typeof app;
