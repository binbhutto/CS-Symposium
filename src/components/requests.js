
const BASE_URL = process.env.REACT_APP_BASE_URL

export const requests = {
    fetchNextEvents : `${BASE_URL}api/nextevent`,
    fetchPastEvents : `${BASE_URL}api/pastevent`,
    fetchBlog : `${BASE_URL}blog/`,
    newBlog : `${BASE_URL}blog/add`,
}

