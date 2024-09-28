import Cabecalho from "./Cabecalho"
import Rodape from "./Rodape"
import Menu from "./Menu"

export default function Pagina(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Cabecalho></Cabecalho>
            <div className="flex-1 flex">
                <Menu></Menu>
                <main className="p-8 bg-">{props.children}</main>
            </div>
            <Rodape></Rodape>
        </div>
    )
}