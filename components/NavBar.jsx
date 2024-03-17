import { useRouter } from "next/router"

const navBarG = [
    { navBar: 1, nombre: "Menú", url: "/"},
    { navBar: 2, nombre: "Resumen", url: "/resumen"},
    { navBar: 3, nombre: "Datos y Total", url: "/total"},
]

const NavBar = () => {

    const router = useRouter();

    const calcularProgreso = () => {
        let navBar;
        switch (router.pathname) {
            case '/':
                navBar = 1;
                break;
            case '/resumen':
                navBar = 2;
                break;
            case '/total':
                navBar = 3;
                break;
            default:
                navBar = 0;
        }
        const porcentaje = (navBar / 3) * 100;
        return porcentaje;
    }

    return (
        <>
            <div className="flex justify-between mb-5">
                {navBarG.map(navBar => (
                    <button
                        onClick={() => {
                            router.push(navBar.url)
                        }}
                        className="text-2xl font-bold"
                        key={navBar.navBar}
                    >
                        {navBar.nombre}
                    </button>
                ))}
            </div>
            <div className="bg-gray-100 mb-10">
                <div 
                    className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white progresoz"
                    style={{width: `${calcularProgreso()}%`}}
                >
                </div>
            </div>
        </>
    )
}

export default NavBar