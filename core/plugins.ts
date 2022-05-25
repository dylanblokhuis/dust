import plugins from "../plugins.ts"

class Plugins {
  active: Dust.ActivePlugin[] = [];

  load() {
    for (const plugin of plugins) {
      plugin.init();
      this.active.push(plugin)
    }
  }
}

export default Plugins