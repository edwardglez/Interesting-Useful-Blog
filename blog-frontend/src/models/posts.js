const url = "http://localhost:4000"

export default class posts {
    static index = () => {
        return fetch(`${url}/posts`,{
            credentials: "include"
        }).then(res => res.json())
    }
    static create = (title, body) => {
        const data = {
            userId: localStorage.getItem('id'),
            title,
            body
        }
        return fetch(`${url}/posts`, {
            // options
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify(data),
        }
        )
    }
    static update = (postId) => {
        return fetch(`${url}/posts/${postId}`).then(res => res.json())
    }

    static delete = (postId) => {
        return fetch(`${url}/posts/${postId}`).then(res => res.json())
    }
}

