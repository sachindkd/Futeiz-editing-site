import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Static website without any API routes needed
  // All functionality is client-side

  const httpServer = createServer(app);
  return httpServer;
}
