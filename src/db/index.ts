import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

export const poolConnection = databaseUrl
  ? mysql.createPool(databaseUrl)
  : mysql.createPool({
      host: process.env.DB_HOST || "localhost",
      port: Number(process.env.DB_PORT) || 3306,
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "belajar_vibe_coding",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

export const db = drizzle(poolConnection, { schema, mode: "default" });

export async function checkDatabaseConnection(): Promise<{ ok: boolean; message: string }> {
  try {
    const connection = await poolConnection.getConnection();
    await connection.ping();
    connection.release();
    return { ok: true, message: "Connected to MySQL successfully" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown database connection error";
    return { ok: false, message };
  }
}

