/// <reference path="../../ns.d.ts" />

const plugin: Dust.Plugin = {
  name: "another"
}

// export function init() {
//   Dust.router.add({
//     path: "/another",
//     handler: (request: Request) => {
//       return new Response("allo")
//     }
//   })
// }

export default plugin;