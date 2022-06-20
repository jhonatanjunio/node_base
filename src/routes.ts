import { Application } from "express";
import UsersController from "./controllers/UsersController";
import { Router } from "./helpers/Router";

export function setupRoutes(app: Application) {
  const router = new Router(app);

  router.group("/api", (router) => {
    router.group("/v1", (router) => {
      router.get("/", (req, res) => {
        return { status: "ok", message: "Working!" };
      });
    });
  });

  router.group("/users", (router) => {
    router.get("/", UsersController.index);
    router.get("/:id", UsersController.show);
    router.post("/", UsersController.create);
    router.put("/:id", UsersController.update);
    router.delete("/:id", UsersController.delete);
  });
}
