import { render } from "../templating.ts";
import Document from "../../templates/admin/document.tsx";
import { createElement } from "react";
import { Menu } from "./menu.ts";

import Dashboard from "../../templates/admin/dashboard.tsx";
import Posts from "../../templates/admin/posts.tsx";
import NotFound from "../../templates/admin/404.tsx";

export { Menu };
export interface Admin {
  menu: Menu;
}

export function init() {
  Dust.admin.menu.add({
    label: "Dashboard",
    route: {
      path: "/admin/dashboard",
      handler: () => handleAdminRequest(Dashboard),
    },
  });

  Dust.admin.menu.add({
    label: "Posts",
    route: {
      path: "/admin/posts",
      handler: () => handleAdminRequest(Posts),
    },
  });

  Dust.router.add({
    path: "/admin",
    handler: () => {
      return new Response(null, {
        status: 302,
        headers: {
          "Location": "/admin/dashboard",
        },
      });
    },
  });

  Dust.router.add({
    handler: () => handleAdminRequest(NotFound),
    path: "/admin(.*)",
  });
}

export function handleAdminRequest(component: React.FC) {
  const el = createElement(Document, {
    hmr: Dust.isDev,
    children: createElement(component),
    menuItems: Dust.admin.menu.getItems(),
  });
  return new Response(render(el), {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
