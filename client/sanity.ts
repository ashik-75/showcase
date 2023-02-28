import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

//...

export const client = createClient({
  projectId: "17mozd28",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
