import { Elysia } from "elysia";
import { checkDatabaseConnection } from "../db";

export const healthRoutes = new Elysia({ prefix: "/health" }).get(
  "/",
  async () => {
    const dbStatus = await checkDatabaseConnection();
    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      database: dbStatus,
    };
  }
);

