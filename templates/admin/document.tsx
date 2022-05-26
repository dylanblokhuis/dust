import type { MenuItem } from "../../core/admin/menu.ts"

interface DocumentProps {
  hmr: boolean
  children: React.ReactElement
  menuItems: MenuItem[]
}
export default function Document({ hmr, children, menuItems }: DocumentProps) {
  return (
    <html className="w-full h-full" lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Dust - Admin</title>
        <link rel="stylesheet" href="/admin/style.css" />
        {hmr && <script src="/hmr.js"></script>}
      </head>
      <body className="w-full h-full flex">
        <aside className="w-72 bg-zinc-900 h-full flex-none text-white p-4 flex flex-col gap-y-2">
          {menuItems.map(menuItem => (
            <a className="font-medium" key={menuItem.label} href={menuItem.route.path}>
              {menuItem.label}
            </a>
          ))}
        </aside>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
