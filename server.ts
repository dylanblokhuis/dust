import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { handleRequest } from "./lib.ts";

await serve(
  (request) => {
    return handleRequest(request);
  },
  {
    port: 3000,
  },
);
