import {
  plugins,
  templating,
  admin,
  css,
  hmr,
  namespace,
  db
} from "./core/mod.ts";

globalThis.Dust = namespace;
if (Dust.isDev) {
  hmr.routes();
  hmr.watch("./templates");
}
css.init();
admin.init();
plugins.init();
templating.init();
db.sync();

export function handleRequest(request: Request) {
  const url = new URL(request.url);
  const route = Dust.router.match(url);

  if (!route) {
    return new Response(null, {
      status: 404,
    });
  }

  return route.handler(request);
}
