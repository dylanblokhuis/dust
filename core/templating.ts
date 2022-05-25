import { renderToString } from "react-dom/server";
import { createElement } from "react";
import Document from "../templates/document.tsx";

export function addBaseTemplateRoute() {
  Dust.router.add({
    path: "/*",
    handler: () => {
      return new Response(render(Document), {
        headers: {
          "Content-Type": "text/html",
        },
      });
    },
  });
}

export function render(document: React.FC): string {
  const el = createElement(document);
  const string = renderToString(el);
  return "<!DOCTYPE html>" + string;
}
