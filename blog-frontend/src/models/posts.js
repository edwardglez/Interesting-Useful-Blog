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
    static update = (id) => {
        return fetch(`${url}/posts/${id}`).then(res => res.json())
    }

    static delete = (id) => {
        const userId = localStorage.getItem('id')
        console.log(userId)
        return fetch(`${url}/posts/${userId}/${id}`, {
            method: "DELETE",
        }
        ).then(res => {
            console.log(res.status)
            return res.status
        })
        .catch(console.error)
    }
}

