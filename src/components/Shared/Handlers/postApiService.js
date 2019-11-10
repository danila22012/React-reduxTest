const BASE_URL='http://blog.api.axenov-it.com'





export function getPosts(){
    
    return fetch(`${BASE_URL}/posts`)
        .then((response)=>{
            return response.json()
        });

}


export function getlastPosts(limit){
    
    return fetch(`${BASE_URL}/posts/last/${limit}`)
        .then((response)=>{
            return response.json()
        });

}