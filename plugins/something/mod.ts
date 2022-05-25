const plugin: Dust.Plugin = () => ({
  name: "something",
  init,
});

function init() {
  Dust.router.add({
    path: "/something",
    handler: (request: Request) => {
      return new Response("Something plugin. :)");
    },
  });
}

export default plugin;
