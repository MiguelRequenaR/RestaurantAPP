import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const RestContext = createContext();

const RestProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({}); 

    // Obtener categorias, acceder a los datos
    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias');
        setCategorias(data);
    }

    useEffect(() => {
        obtenerCategorias();
    }
    , []);

    useEffect(() =>{
        setCategoriaActual(categorias[0]);
    }, [categorias])

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter( cat => cat.id === id);
        setCategoriaActual(categoria[0]);
    }

    return(
        <RestContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >
            {children}
        </RestContext.Provider>
    )
}
export {
    RestProvider
}

export default RestContext;