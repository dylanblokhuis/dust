import plugins from "../plugins.ts";

export function init() {
  for (const plugin of plugins) {
    plugin.init();
  }
}
