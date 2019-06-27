import GphApiClient from 'giphy-js-sdk-core';

const client = GphApiClient('MTi47j0kagCljkuKvVR9zIrph7FaioUY');

const searchGifs = async (q = "", limit = 12, offset = 0) => {
    return await client.search('gifs', {q, limit, offset});
};

export {searchGifs};