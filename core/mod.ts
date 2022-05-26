import Router from "./router.ts";

export interface Dust {
  router: Router;
  isDev: boolean;
}

export const namespace: Dust = {
  router: new Router(),
  isDev: Deno.args.includes("--dev")
}

export * as plugins from "./plugins.ts"
export * as templating from "./templating.ts";
export * as admin from "./admin/mod.ts";
export * as css from "./css/mod.ts";
export * as hmr from "./hmr.ts";