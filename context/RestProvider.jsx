import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const RestContext = createContext();

const RestProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({}); 
    const [producto, setProducto] = useState({}); 
    const [modal, setModal] = useState(false); 

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

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleChangeModal = () => {
        setModal(!modal);
    }

    return(
        <RestContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                handleSetProducto,
                producto,
                modal,
                handleChangeModal
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