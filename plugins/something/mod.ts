/// <reference path="../../ns.d.ts" />

const plugin: Dust.Plugin = {
  name: "something"
}

export function init() {
  Dust.router.add({
    path: "/",
    handler: (request: Request) => {
      return new Response("Something plugin. :)")
    }
  })

}

export default plugin;