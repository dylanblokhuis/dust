/** @jsx h */
// deno-lint-ignore-file
import { type Dust } from "./core/mod.ts";

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
