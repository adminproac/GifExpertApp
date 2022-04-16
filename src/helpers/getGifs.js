export const getGifs=async(category)=>{
    const api_key = 'bz12oOGQBXwwbmSAnTy9B5CB0aZF7yEK'
    const url = `https:api.giphy.com/v1/gifs/search?limit=10&offset=5&api_key=${api_key}&q=${category}`
    const {data} = await fetch(url).then((resp) =>(resp?.json()))
    // const {data} = await resp?.json()
    const gifs = data.map((img)=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs 
}

