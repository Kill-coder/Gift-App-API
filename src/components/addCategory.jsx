import React, {useState} from 'react'
import PropTypes from 'prop-types'

export function AddCategory( {setCategorias}) {

  const [valueInput, setValueInput] = useState('')

  const handleInputChange=(change)=>{
    setValueInput(change.target.value)

  }

  const handleSubmit = (submit) =>{
    submit.preventDefault();
    setCategorias(categorias  => [valueInput,...categorias])
    setValueInput('');
  }


  return (

    <form onSubmit={handleSubmit}>
        <input type={'text'}
          value={valueInput}
          placeholder="Search..."
          onChange={handleInputChange}
        ></input>
    </form>
  
  )
}


AddCategory.propTypes={
  setCategorias: PropTypes.func.isRequired
}