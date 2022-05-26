// temporary unocss until tailwind adds deno support
import { createGenerator } from "https://esm.sh/@unocss/core@0.34.1";
import presetWind from "https://esm.sh/@unocss/preset-wind@0.34.1";
import { walk } from "https://deno.land/std@0.140.0/fs/mod.ts";
import { join } from "https://deno.land/std@0.140.0/path/mod.ts";

export function init() {
  Dust.router.add({
    path: "/style.css",
    handler: async () => {
      return new Response(await generate("./templates", ["admin"]), {
        headers: {
          "Content-Type": "text/css",
          // "Cache-Control": "public, max-age=31536000",
        },
      });
    },
  });

  Dust.router.add({
    path: "/admin/style.css",
    handler: async () => {
      return new Response(await generate("./templates/admin"), {
        headers: {
          "Content-Type": "text/css",
          // "Cache-Control": "public, max-age=31536000",
        },
      });
    },
  });
}

export async function generate(
  relativeDir: string,
  blacklist: string[] = [],
): Promise<string> {
  const uno = createGenerator({
    presets: [
      presetWind(),
    ],
  });

  const fileContentPromises = [];
  for await (const entry of walk(join(Deno.cwd(), relativeDir))) {
    if (entry.isDirectory) {
      continue;
    }

    if (
      blacklist.find((blacklisted) => {
        return entry.path.includes(blacklisted);
      })
    ) {
      continue;
    }

    fileContentPromises.push(Deno.readTextFile(entry.path));
  }

  const content = await Promise.all(fileContentPromises);
  const [preflightRes, unoResult] = await Promise.all([
    fetch("https://esm.sh/@unocss/reset@0.34.1/tailwind.css"),
    uno.generate(content.join()),
  ]);
  const preflight = await preflightRes.text();
  return [preflight, unoResult.css].join("\n");
}
