import { render } from "../templating.ts";
import Document from "../../templates/admin/document.tsx";

export function init() {
  Dust.router.add({
    handler: handleAdminRequest,
    path: "/admin",
  });
  Dust.router.add({
    handler: handleAdminRequest,
    path: "/admin/**/*",
  });
}

export function handleAdminRequest() {
  return new Response(render(Document), {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
