import { Application, Request, Response, NextFunction } from "express";

export type Handler = (req: Request, res: Response, next: NextFunction) => Promise<any> | any;

export class Router {
  constructor(public app: Application, public base: string = "") {}

  public handle(handler: Handler) {
    return async (req: Request, res: Response, next: NextFunction) => {
      const data = await handler(req, res, next);

      return data && this.isSerializable(data) ? res.json(data) : res.send();
    };
  }

  public isSerializable(obj: any): boolean {
    try {
      JSON.parse(JSON.stringify(obj));
      return true;
    } catch (error) {
      return false;
    }
  }

  group(base: string, callback: (router: Router) => any) {
    callback(new Router(this.app, this.base + base));
    return this;
  }

  get(path: string, handler: Handler) {
    this.app.get(this.base + path, this.handle(handler));
    return this;
  }

  post(path: string, handler: Handler) {
    this.app.post(this.base + path, this.handle(handler));
    return this;
  }

  put(path: string, handler: Handler) {
    this.app.put(this.base + path, this.handle(handler));
    return this;
  }

  delete(path: string, handler: Handler) {
    this.app.delete(this.base + path, this.handle(handler));
    return this;
  }

  patch(path: string, handler: Handler) {
    this.app.patch(this.base + path, this.handle(handler));
    return this;
  }

  middleware(...middlewares: Handler[]) {
    this.app.use(this.base, ...middlewares);
    return this;
  }
}
