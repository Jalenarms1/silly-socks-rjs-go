
//  sillysocks-goth-production.up.railway.app
export const apiRoot = "https://sillysocks-goth-production.up.railway.app/api"
// export const apiRoot = "http://localhost:4444/api"

// export const get = () => {

// }

export const getCookie = () => {
    const cookies = document.cookie
    console.log(cookies);
    
    let uid;
    if (cookies) {
        uid = cookies.split(`silly-socks-user=`)[1].split(";")[0]
        console.log(cookies.split(`silly-socks-user=`)[1].split(";")[0]);

    }

    return uid
}