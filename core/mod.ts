import Router from "./router.ts"
import Plugins from "./plugins.ts"

export interface Dust {
  menu: Menu
  plugins: Plugins
  router: Router
}

class Menu { }

export {
  Menu,
  Plugins,
  Router
}

export { addBaseTemplateRoute } from "./templating.ts"
export * as admin from "./admin/mod.ts"
export * as css from "./css/mod.ts"