import { styled } from "styled-components";

interface AsideProps {
    open: string;
}

export const TagHeader = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 5px;
    border-bottom: solid 1px black;

    nav{
        display: flex;
        gap: 10px;
        button{
            background: transparent;
            color: var(--color-string);
            padding: 3px 5px;
            border: none;
            font-size: 12.4px;
            text-transform: capitalize;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            img{
                width: 15px;
            }
        }
        button:hover{
            background: var(--bg-search);
        }
    }
    .config{
        position: absolute;
        right: 20px;
        top: 40px;
        button{
            background: transparent;
            color: var(--color-string);
            padding: 3px 5px;
            border: none;
            text-transform: capitalize;
            font-size: 20px;
        }
        button:hover{
            background: var(--bg-search);
        }
    }
`

export const Aside = styled.aside<AsideProps>`
    position: fixed;
    bottom: 0;
    right: 0;
    width: ${({open}) => open === "open" ? "300px" : "0px"};
    overflow: hidden;
    height: calc(100vh - 28px);

    background: var(--bg-aside);
    transition: all .3s ease;

    z-index: 10;

    color: var(--color-string);
    .header{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 10px;

        button{
            border: solid 1px var(--color-string);
            padding: 5px 10px;
            background: transparent;
            color: var(--color-string);
        }
        button:hover{
            background: #c7c7c852;
        }
    }
    .context{
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        padding: 20px 10px;
        h3{
            font-size: 16px;
        }
        button{
            border: solid 1px var(--color-string);
            padding: 5px 10px;
            background: transparent;
            color: var(--color-string);
        }
        button:hover{
            background: #c7c7c852;
        }
    }
    .alert{
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        li{
            margin-left: 20px;
        }
    }
`