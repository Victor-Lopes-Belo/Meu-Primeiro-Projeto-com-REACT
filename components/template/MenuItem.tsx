import Link from "next/link";

interface MenuItemProps {
    texto: string
    href: string;
}

export default function MenuItem(props: MenuItemProps) {
    return (
        <div className="flex items-center p-2 hover:bg-zinc-700">
            <Link href={props.href}>{props.texto}</Link>
        </div> 
    )
}