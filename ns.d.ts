// deno-lint-ignore-file
import { type Dust } from "./core/mod.ts";

declare global {
  namespace Dust {
    interface Plugin {
      name: string
    }

    interface PluginModule {
      default: Plugin
      init: () => void
    }
  }

  var Dust: Dust
}

export { }