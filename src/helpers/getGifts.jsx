

export const getGifts = async ( category ) =>{ //Creamos una funcion asyncrona para no romper el event loop de JS

    const key = 'P2LHjSV1r79ZDlDSS2jYYP8ekcUHz9sB'//La key la introducimos dentro de la url mediante templet string asi ocupa menos space
    const url= `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${ encodeURI( category ) }&limit=10`

    const resp = await fetch(url) // Esperamos la respuesta para saber si todo esta okey o luego poder trabajar con los datos

    if(resp.ok){
      const {data} = await resp.json(); //Desestructuramos solo el objeto de datos de todos los datos que nos devuelve el json

      const gift = data.map( img => { //Aqui devolvemos un objeto con las siguientes propiedades
        return{
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url
        }
      })

      return gift;
    }


}