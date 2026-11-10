import { Elysia, t } from "elysia";
import { db } from "../db";
import { users } from "../db/schema";

export const userRoutes = new Elysia({ prefix: "/api/users" })
  .get("/", async () => {
    try {
      const allUsers = await db.select().from(users);
      return { success: true, data: allUsers };
    } catch (error) {
      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to fetch users",
      };
    }
  })
  .post(
    "/",
    {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: "email" }),
      }),
    },
    async ({ body, set }) => {
      try {
        await db.insert(users).values({
          name: body.name,
          email: body.email,
        });
        set.status = 201;
        return { success: true, message: "User created" };
      } catch (error) {
        set.status = 500;
        return {
          success: false,
          message: error instanceof Error ? error.message : "Failed to create user",
        };
      }
    }
  );
