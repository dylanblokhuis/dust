/// <reference path="./ns.d.ts" />
import { Menu, Plugins, Router, addBaseTemplateRoute, admin, css } from "./core/mod.ts";

export async function handleRequest(request: Request) {
  globalThis.Dust = {
    menu: new Menu(),
    plugins: new Plugins(),
    router: new Router()
  }

  css.init();
  admin.init();

  await Dust.plugins.load();
  addBaseTemplateRoute();

  const url = new URL(request.url);
  const route = Dust.router.match(url);

  if (!route) {
    return new Response(null, {
      status: 404
    })
  }

  return route.handler(request)
}