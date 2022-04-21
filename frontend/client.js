import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: 'o3t2l3pf',
    dataset: 'production',
    useCdn: true,
    token: process.env.PROJECT_TOKEN
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);