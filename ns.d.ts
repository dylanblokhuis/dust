// deno-lint-ignore-file
import { type Dust } from "./core/mod.ts";
import type React from "react"

declare global {
  namespace Dust {
    type ActivePlugin = {
      name: string;
      init: () => void;
    };

    type Plugin = () => ActivePlugin;
  }

  var Dust: Dust;
}

export { };
