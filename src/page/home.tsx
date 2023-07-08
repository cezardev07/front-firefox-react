import { useState } from "react"
import { Header } from "../components/header";
import { Main } from "../components/main";

export const Home = () => {
    const [visible, setVisible] = useState("visible")

    const visibleAtalhos = () => {
        visible === "visible" ? setVisible("hidden") : setVisible("visible")
    }

    return (
        <>
            <Header props={[{visibleAtalhos}]}/>
            <Main props={visible}/>
        </>
    )
}