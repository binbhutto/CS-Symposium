
const BASE_URL = "http://localhost:5000/";

export const requests = {
    fetchNextEvents : `${BASE_URL}api/nextevent`,
    fetchPastEvents : `${BASE_URL}api/pastevent`,
    fetchBlog : `${BASE_URL}blog/`,
    newBlog : `${BASE_URL}blog/add`,
}

