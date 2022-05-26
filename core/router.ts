import { globToRegExp } from "https://deno.land/std@0.140.0/path/glob.ts";

export interface Route {
  path: string;
  handler: (request: Request) => Response | Promise<Response>;
}

class Router {
  routes: Route[] = [];

  match(url: URL): Route | undefined {
    const route = this.routes.find((route) => {
      const regexp = globToRegExp(route.path);
      return regexp.test(url.pathname);
    });

    return route;
  }

  add(route: Route): void {
    if (
      this.routes.find((existingRoute) => existingRoute.path === route.path)
    ) {
      throw new Error("A route already exists with this path: " + route.path);
    }
    this.routes.push(route);
  }
}

export default Router;
