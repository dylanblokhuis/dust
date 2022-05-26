import { renderToString } from "react-dom/server";
import { createElement } from "react";
import Document from "../templates/document.tsx";

export function init() {
  Dust.router.add({
    path: "/(.*)",
    handler: () => {
      const el = createElement(Document, {
        hmr: Dust.isDev,
      });
      return new Response(render(el), {
        headers: {
          "Content-Type": "text/html",
        },
      });
    },
  });
}

export function render(element: React.ReactElement): string {
  const string = renderToString(element);
  return "<!DOCTYPE html>" + string;
}
