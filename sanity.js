import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: '8xdi8ydi',
    dataset: 'production',
    // to optimise cache if things not work
    useCdn: true,
    apiVersion: "2021-10-21",
});

// now im going to make image url builder this will pull image urls
// when i'm going to chnage/update image it provide the new url of
// that image.
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

//  RUN this to add exception for localhost 300 CORS policy
//  sanity cors add http://localhost:3000
/*
    what is ther purpose od cross-origin: when we want to fetch
    data from sanity . you sanity allow us to check.authenticate
    the request of data coming from which url.
    if we want to fetch data from blbl.com than we need to define in sanity API origin.
    Than sanity will delivere us our requested api data.
*/
export default client;