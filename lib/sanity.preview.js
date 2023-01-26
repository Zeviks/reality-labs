"use client";

import { definePreview } from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";
import { data } from "autoprefixer";

function onPublicAccessOnly() {
  throw new Error(`Unable to loade preview as you're not logged in`);
}

if (!projectId || !dataset) {
  throw new Error(
    `Missing projectId or dataset. Check your sanity.json or .env`
  );
}

//This is what allows us to make queries to our endpoint (CMS / Backend)
//Which also includes data that is its draft stage, which has not been published yet
export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
