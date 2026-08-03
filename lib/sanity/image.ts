import { createImageUrlBuilder } from "@sanity/image-url";
import type { Image } from "sanity";
import { SANITY_DATASET, SANITY_PROJECT_ID } from "./env";

const builder = createImageUrlBuilder({ projectId: SANITY_PROJECT_ID, dataset: SANITY_DATASET });

export function urlFor(source: Image) {
  return builder.image(source);
}
