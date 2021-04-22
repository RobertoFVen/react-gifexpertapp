

    export const getGifs = async( category ) => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=f11neIMkRk6ZT86fn56A29oL41bDwI9C`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {

                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url

            }
        })

        return gifs;
    }