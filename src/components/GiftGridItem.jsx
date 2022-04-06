import React from 'react'


export const GiftGridItem = ( {id , title , url} ) => {

  return (
    <div className='card animate__bounceIn'>

        <img src={url} alt={title} />
        <p>{title}</p>
    
    </div>
  )
}
