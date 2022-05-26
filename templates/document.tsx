interface DocumentProps {
  hmr: boolean
}
export default function Document({ hmr }: DocumentProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Dust</title>
        <link rel="stylesheet" href="/style.css" />
        {hmr && <script src="/hmr.js"></script>}
      </head>
      <body>
        <div className="text-lg font-bold p-4">
          Hello World!
        </div>
      </body>
    </html>
  );
}
