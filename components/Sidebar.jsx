import Image from 'next/image'
import useRest from '@/hooks/useRest'
import Categoria from './Categoria';

const Sidebar = () => {

    const { categorias } = useRest();
    return (
        <>
            <Image
                src="/assets/img/logo.svg"
                alt="Logo"
                width={300}
                height={100}  
            />
            <nav className='mt-10'>
                {categorias.map((categoria) => (
                    <Categoria 
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>
        </>
    )
}

export default Sidebar