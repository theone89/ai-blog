import { createApi } from "unsplash-js";

let cachedUnsplashApi = null;
let lastUnsplashApiKey = null;

/**
 * Creates an instance of the Unsplash API client.
 *
 * @param {string} unsplashApiKey - The API key for Unsplash.
 * @returns {object} - An instance of the Unsplash API client.
 */
export function createUnsplashApi(unsplashApiKey) {
    if (cachedUnsplashApi && lastUnsplashApiKey === unsplashApiKey) {
        return cachedUnsplashApi;
    }

    console.log('api imagen unsplash');
    cachedUnsplashApi = createApi({
        accessKey: unsplashApiKey,
    });
    lastUnsplashApiKey = unsplashApiKey;

    return cachedUnsplashApi;
}