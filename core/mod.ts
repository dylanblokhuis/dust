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
