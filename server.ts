import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { handleRequest } from "./mod.ts";

await serve(
  (request) => handleRequest(request),
  {
    port: 3000,
  },
);
