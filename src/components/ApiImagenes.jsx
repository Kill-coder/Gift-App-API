import React, {useEffect , useState} from 'react'

import {GiftGridItem} from '../components/GiftGridItem'
import {getGifts} from '../helpers/getGifts'

export const ApiImagenes = ({category}) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
      getGifts( category )
        .then( imgs => setImages(imgs) )
  }, [category]) /** Como segundo argumento recibe un array de dependencias porque asi solo se activa la funcion una vez aunque detecte cambios en el componente
  con eso evitamos que se cargue cada vez que el componente contemple un cambio , se ejecuta la primera vez que el componente se renderize */

  return (
    <>
    
      <h3>{category}</h3>
      <div className='card-grid '>
          {
            images.map( img =>(
              <GiftGridItem 
                  key = {img.id}
                  {... img}
              />//Devolvemos un objeto con los nombres. Images hace referencia la obj y podemos acceder a sus datos
            ))
          }  

      </div>
    </>
  )
}
