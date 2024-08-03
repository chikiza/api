import React, {useEffect, useState} from 'react'
import { todosPersonajes } from '../funciones/funciones'


const Inicio = () => {
    const [personajes, setPersonajes] = useState(null)
    useEffect(()=>{
        todosPersonajes(setPersonajes);
    },[])
  return (
    <>
    {personajes === null ? ('no hay personajes'):(personajes.map(personaje => (
        <div key={personaje.id}>
            <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
        </div>
    )))}
    <div>

    </div>
    </>

    
  )
}

export default Inicio