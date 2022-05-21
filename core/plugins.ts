class Plugins {
  active: Dust.Plugin[] = [];

  async load() {
    const { default: activePlugins } = await import(`../plugins/active.json?time=${Date.now()}`, {
      assert: {
        type: "json"
      }
    });

    const baseUrl = import.meta.url.replace("/core/plugins.ts", "/plugins/");
    const modules = await Promise.all(activePlugins.map((url: string) => {
      return import(baseUrl + url);
    }))

    await Promise.all(modules.map((module: Dust.PluginModule) => {
      const metadata = module.default;
      this.active.push(metadata);

      if (!module.init) {
        console.warn(`Plugin "${metadata.name}" does not export an init function.`);
        return null;
      }

      return module.init()
    }))
  }
}

export default Plugins