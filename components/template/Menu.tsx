import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <aside className="w-80 bg-zinc-800 p-6">
            <nav className="flex flex-col gap-2">
                <MenuItem texto="Início" href="/"/>
                <MenuItem texto="Primeiro exemplo" href="/primeiro"/>
                <MenuItem texto="Componente com estado" href="/contador"/>
                <MenuItem texto="Formulário" href="/formulario"/>
            </nav>
        </aside>
    )
}