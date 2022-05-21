/// <reference path="./ns.d.ts" />
import { Menu, Plugins, Router } from "./core/mod.ts";

export async function handleRequest(request: Request) {
  globalThis.Dust = {
    menu: new Menu(),
    plugins: new Plugins(),
    router: new Router()
  }

  await Dust.plugins.load();

  const url = new URL(request.url);
  const route = Dust.router.match(url);

  if (!route) {
    return new Response(null, {
      status: 404
    })
  }

  return route.handler(request)
}