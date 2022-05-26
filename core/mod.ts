import Router from "./router.ts";
import { Admin, Menu } from "./admin/mod.ts";

export interface Dust {
  isDev: boolean;
  router: Router;
  admin: Admin;
}

export const namespace: Dust = {
  isDev: Deno.args.includes("--dev"),
  router: new Router(),
  admin: {
    menu: new Menu(),
  },
};

export * as plugins from "./plugins.ts";
export * as templating from "./templating.ts";
export * as admin from "./admin/mod.ts";
export * as css from "./css/mod.ts";
export * as hmr from "./hmr.ts";
export * as db from "./db.ts";
