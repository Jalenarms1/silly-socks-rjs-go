
//  sillysocks-goth-production.up.railway.app
export const apiRoot = "https://sillysocks-goth-production.up.railway.app/api"
// export const apiRoot = "http://localhost:4444/api"

export const TOKEN_KEY = "silly-socks-user-token"

export const get = async (path: string) => {
    let token = localStorage.getItem(TOKEN_KEY) ?? ""
    
    if (token == "" || token == undefined) {
        const resp = await fetch(`${apiRoot}/user/token`)

        const data = await resp.json()

        if (data) {
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            
            token = data
        }
    } 
    
    const resp = await fetch(`${apiRoot}${path}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${token}`
        }
    })

    return resp.json()


}

export const post = async (path: string, data: any) => {
    let token = localStorage.getItem(TOKEN_KEY) ?? ""
    if (token == "" || token == undefined) {
        const resp = await fetch(`${apiRoot}/user/token`)

        const data = await resp.json()

        if (data) {
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            token = data
        }

    } 

    const resp =  await fetch(`${apiRoot}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${JSON.parse(token)}`
        },
        body: JSON.stringify(data)
    })

    return resp.json()
}

export const put = async (path: string, data: any) => {
    let token = localStorage.getItem(TOKEN_KEY) ?? ""
    if (token == "" || token == undefined) {
        const resp = await fetch(`${apiRoot}/user/token`)

        const data = await resp.json()

        if (data) {
            localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
            token = data
        }
    } 

    const resp =  await fetch(`${apiRoot}${path}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${JSON.parse(token)}`
        },
        body: JSON.stringify(data)
    })

    return resp.json()
}

