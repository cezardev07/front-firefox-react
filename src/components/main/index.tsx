import { useEffect, useState } from "react";
import { TagMain, Atalhos } from "./style";
import faviconGoogle from "../../assets/faviconGoogle.ico";

import amazon from "../../assets/amazon.jpg";
import facebook from "../../assets/facebook.png";
import reddit from "../../assets/reddit.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import wikipedia from "../../assets/wikipedia.jpg";
import chatgpt from "../../assets/chatgpt.png";
import instagram from "../../assets/instagram.jpg";

interface TypeDataFake {
    icone: string;
    name: string;
    url?: string;
}

export const Main = ({ props } : any) => {
    const [items, setItems] = useState<TypeDataFake[]>([])
    const [value, setValue] = useState("")

    const dataFake = [
        { icone: amazon, name: "amazon", url: "https://www.amazon.com.br/" },
        { icone: youtube, name: "YouTube", url: "https://www.youtube.com/" },
        { icone: facebook, name: "facebook", url: "https://pt-br.facebook.com/" },
        { icone: wikipedia, name: "wikipedia", url: "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal" },
        { icone: reddit, name: "reddit", url: "https://www.reddit.com/" },
        { icone: twitter, name: "twitter", url: "https://twitter.com/" },
        { icone: chatgpt, name: "chatgpt", url: "https://openai.com/chatgpt" },
        { icone: instagram, name: "instagram", url: "https://www.instagram.com/" },
    ]

    useEffect(() => {
        setItems(dataFake)
    }, [])

    const search = (event:any) => {
        event.preventDefault()
        setValue("")
        window.open(`https://www.google.com/search?client=firefox-b-d&q=${value}`)
    }

    return(
        <TagMain>
            <div className="icone-logo">
                <div className="logo"></div>
                <div className="wordmark">
                    <h1>Firefox</h1>
                </div>
            </div>
            <form className="search-bar" onSubmit={search}>
                <label htmlFor="search" className="icone-google">
                    <img src={faviconGoogle}/>
                </label>
                <input onChange={({ target }) => setValue(target.value)} value={value} id="search" type="text" placeholder="Pesquise com Google ou digite um endereço"/>
            </form>
            <Atalhos visible= {props.toString()} className="saved-sites">

                {
                    items.map((item, id) => {
                        return (
                            <a className="card" key={id} href={item.url} target="_blank" rel="noopener noreferrer">
                                <div className="icone">
                                    <img src={item.icone}/>
                                </div>
                                <div className="name-site">
                                    <p>{item.name}</p>
                                </div>
                                <div className="config">
                                    <span>...</span>
                                </div>
                            </a>
                        )
                    })
                }
            </Atalhos>
        </TagMain>
    )
}