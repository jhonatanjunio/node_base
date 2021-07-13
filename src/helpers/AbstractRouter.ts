import { Handler, Router } from "express";

class AbstractRouter {
  routes: Router = Router();

  resource(
    base: string,
    callback: (router: Router) => void,
    middlewares: Handler[] = []
  ) {
    const newRouter = Router();
    for (const middleware of middlewares) {
      newRouter.use(middleware);
    }
    this.routes.use(base, newRouter);
    return callback(newRouter);
  }
}

export default AbstractRouter;
