import UsersController from "./controllers/UsersController";
import AbstractRouter from "./helpers/AbstractRouter";

const router = new AbstractRouter();

router.resource("/users", (usersRouter) => {
  usersRouter.get("/",        UsersController.index);
  usersRouter.post("/",       UsersController.create);
  usersRouter.get("/:id",     UsersController.show);
  usersRouter.put("/:id",     UsersController.update);
  usersRouter.delete("/:id",  UsersController.delete);
});


export default router.routes;
