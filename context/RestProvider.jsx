import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const RestContext = createContext();

const RestProvider = ({children}) => {

    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({}); 
    const [producto, setProducto] = useState({}); 
    const [modal, setModal] = useState(false); 
    const [pedido, setPedido] = useState([]); //[{producto: {}, cantidad: 1}

    const router = useRouter();

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
        router.push('/');
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleChangeModal = () => {
        setModal(!modal);
    }

    const handleAgregarPedido = ({categoriaId, ...producto}) => {
        if(pedido.some(productoState => productoState.id === producto.id)) {
            //Actualizar cantidad
            const pedidoActualizado = pedido.map(productoState => productoState.id === producto.id ? producto : productoState);
            setPedido(pedidoActualizado);
            toast.success('Guardado correctamente');
        }else{
            setPedido([...pedido, producto]);
            toast.success('Agregado correctamente');
        }
        setModal(false);
    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id);
        setProducto(productoActualizar[0]);
        setModal(!modal);
    }

    const handleEliminarProducto = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id);
        setPedido(pedidoActualizado);
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
                handleChangeModal,
                handleAgregarPedido,
                pedido,
                handleEditarCantidad,
                handleEliminarProducto
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