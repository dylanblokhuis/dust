import React from "react";
import Menu from "./menu.tsx";

export default function Document() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Dust - Admin</title>
        <link rel="stylesheet" href="/admin/style.css" />
      </head>
      <body>
        <Menu />
      </body>
    </html>
  );
}
