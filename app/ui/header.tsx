import { Noto_Serif } from "next/font/google";

const serif = Noto_Serif({ subsets: ["latin", "greek"] });

interface HeaderProps {
  children?: React.ReactNode;
  level?: number;
  textAlign: "center" | "left";
}

export function Header(props: HeaderProps) {
  if (props.level === 2) {
    return <h2 className={serif.className} style={{textAlign: props.textAlign}}>{props.children}</h2>;
  } else if (props.level === 3) {
    return <h3 className={serif.className} style={{textAlign: props.textAlign}}>{props.children}</h3>;
  }
  return <h1 className={serif.className} style={{textAlign: props.textAlign}}>{props.children}</h1>;
}
