import { join } from "https://deno.land/std@0.140.0/path/mod.ts";

const HMR_CLIENT = `let socket;
let reconnectTimer;

const wsOrigin = window.location.origin
  .replace("http", "ws")
  .replace("https", "wss");
const hmrUrl = wsOrigin + "/hmr";

hmrSocket();

function hmrSocket(callback) {
  if (socket) {
    socket.close();
  }

  socket = new WebSocket(hmrUrl);
  socket.addEventListener("open", callback);
  socket.addEventListener("message", (event) => {
    if (event.data === "refresh") {
      console.log("refreshings");
      window.location.reload();
    }
  });

  socket.addEventListener("close", () => {
    console.log("reconnecting...");
    clearTimeout(reconnectTimer);
    reconnectTimer = setTimeout(() => {
      hmrSocket(() => {
        window.location.reload();
      });
    }, 500);
  });
}
`;
const HMR_SOCKETS: Set<WebSocket> = new Set();

export function routes() {
  Dust.router.add({
    path: "/hmr.js",
    handler: () => {
      return new Response(HMR_CLIENT, {
        headers: {
          "Content-Type": "application/javascript",
        },
      });
    }
  })

  Dust.router.add({
    path: "/hmr",
    handler: (request) => {
      const { response, socket } = Deno.upgradeWebSocket(request);
      HMR_SOCKETS.add(socket);
      socket.onclose = () => {
        HMR_SOCKETS.delete(socket);
      };

      return response;
    }
  })
}

export async function watch(directory: string) {
  const watcher = Deno.watchFs(join(Deno.cwd(), directory));
  for await (const event of watcher) {
    if (event.kind === "modify" || event.kind === "create") {
      for (const path of event.paths) {
        if (path.endsWith(".tsx") || path.endsWith(".ts")) {
          console.log(path);

          setTimeout(() => {
            HMR_SOCKETS.forEach((socket) => {
              socket.send("refresh");
            });
          }, 200)
        }
      }
    }
  }
}