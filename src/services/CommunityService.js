function getUsers() {
    return fetch("/users").then(resp => {
        return resp.json()
    })
}

function getPosts() {
    return fetch("/posts").then(resp => {
        if (resp.status === 401) {
            window.location.href = "/login"
        }
        return resp.json()
    }).catch(err => {
        console.log('@@@@err', err)
    })
}

function insertPost(post) {
    return fetch("/add_post", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
}

export { insertPost, getPosts, getUsers };