import { TagHeader, Aside } from "./style"
import { IoSettingsOutline } from "react-icons/io5"
import { FaRegShareFromSquare } from "react-icons/fa6"

import logo from "../../assets/logo.svg";
import { useState } from "react";

export const Header = ({props} : any) => {
    const [open, setOpen] = useState("close")

    const toggleAside = () => {
        open === "open" ? setOpen("close") : setOpen("open")
    }

    return(
        <TagHeader>
            <nav>
                <button><FaRegShareFromSquare/>impotar favoritos...</button>
                <button><img src={logo}/> introdução</button>
            </nav>
            <div className="config">
                <button onClick={toggleAside} ><IoSettingsOutline/></button>
            </div>
            <Aside open = {open.toString()}>
                <div className="header">
                    <button onClick={toggleAside} >atalhos</button>
                </div>
                <div className="context">
                    <h3>atalhos</h3>
                    <button onClick={props[0].visibleAtalhos}>esconder</button>
                </div>
                <ol className="alert">
                    <p><strong>Atividade</strong></p>
                    <li>
                        <span>esconder atalhos</span>
                    </li>
                    <li>
                        <span>mostrar atalhos</span>
                    </li>
                </ol>
            </Aside>
        </TagHeader>
    )
}