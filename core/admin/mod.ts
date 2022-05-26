import { render } from "../templating.ts";
import Document from "../../templates/admin/document.tsx";
import { createElement } from "react";

export function init() {
  Dust.router.add({
    handler: handleAdminRequest,
    path: "/admin(.*)",
  });
}

export function handleAdminRequest() {
  const el = createElement(Document, {
    hmr: Dust.isDev,
  })
  return new Response(render(el), {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
