import {useState} from 'react'

import {AddCategory} from '../components/addCategory'
import {ApiImagenes} from '../components/ApiImagenes'

const GiftExpertApp = () => {

    const [categorias , setCategorias] = useState(['']);

    return ( 
        <>
            <h2>GiftExpert</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr/>
            

            <ol>
                {
                    categorias.map( category => (
                        <ApiImagenes key={category} category={category} />
                    ))
                }
            </ol>
        </>    
    );
}


export default GiftExpertApp;