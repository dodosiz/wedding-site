import { Noto_Serif } from "next/font/google";

const serif = Noto_Serif({subsets: ["latin", "greek"]})

interface HeaderProps {
    children?: React.ReactNode;
}

export function Header(props: HeaderProps) {
    return <h1 className={serif.className}>{props.children}</h1>
}