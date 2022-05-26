import Menu from "./menu.tsx";

interface DocumentProps {
  hmr: boolean
}
export default function Document({ hmr }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Dust - Admin</title>
        <link rel="stylesheet" href="/admin/style.css" />
        {hmr && <script src="/hmr.js"></script>}
      </head>
      <body>
        <Menu />
      </body>
    </html>
  );
}
