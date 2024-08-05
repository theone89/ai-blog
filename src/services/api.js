import { createApi } from "unsplash-js";

const cachedUnsplashApis = {};

/**
 * Creates an instance of the Unsplash API client for a specific user.
 *
 * @param {string} userId - The user ID.
 * @param {string} unsplashApiKey - The API key for Unsplash.
 * @returns {object} - An instance of the Unsplash API client.
 */
export function createUnsplashApi(userId, unsplashApiKey) {
    if (cachedUnsplashApis[userId] && cachedUnsplashApis[userId].apiKey === unsplashApiKey) {
        return cachedUnsplashApis[userId].api;
    }

    console.log(`Creating Unsplash API instance for user ${userId}`);
    const api = createApi({
        accessKey: unsplashApiKey,
    });
    cachedUnsplashApis[userId] = { apiKey: unsplashApiKey, api };

    return api;
}