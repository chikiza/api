import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { unicoPersonaje } from '../funciones/funciones';

const Personaje = () => {
    const [personaje, setPersonaje] = useState(null);
    const params = useParams();

    useEffect(() => {
        unicoPersonaje(params.id, setPersonaje);
    }, [params.id]);

    return (
        <>
            {personaje === null ? (
                <p>No hay personaje</p>
            ) : (
                <>
                    <h2>Personaje {personaje.name} </h2>
                    <p>ID #{params.id}</p>
                    <img src={personaje.image} alt={personaje.name} />
                </>
            )}
        </>
    );
};

export default Personaje;
