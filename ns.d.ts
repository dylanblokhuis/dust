/** @jsx h */
// deno-lint-ignore-file
import { type Dust } from "./core/mod.ts";
import type React from "react"

declare global {
  var h: typeof React.createElement
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
