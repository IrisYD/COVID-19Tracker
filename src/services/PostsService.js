
const url = "https://localhost:3001"

export const addPost = (newPost) =>
    fetch(url + "/add_post", {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllPosts = () =>
    fetch(url + "/posts")
        .then(response => response.json())

export default {
    addPost, findAllPosts,
}