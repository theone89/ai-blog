
import { createApi } from "unsplash-js";

/**
 * Creates an instance of the Unsplash API client.
 *
 * @param {string} unsplashApiKey - The API key for Unsplash.
 * @returns {object} - An instance of the Unsplash API client.
 */
export function createUnsplashApi(unsplashApiKey) {

    const apiUnsplsh = "je80tOS5RE_JEfcfLZ_DB5hkxXa3H9qb4w3Yv27VzWM"
    return createApi({
        accessKey: apiUnsplsh,
    });
}