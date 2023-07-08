import logo from "../../assets/logo.svg";
import { styled } from "styled-components"

interface AtalhosVisible{
    visible: string
}

export const TagMain = styled.main`
    max-width: 100%;
    min-height: 85vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    gap: 50px;

    .icone-logo{
        display: flex;
        flex-direction: row;
        gap: 5px;

    .logo{
        background: url(${logo}) no-repeat center;
        background-size: auto;
        background-size: 82px;
        display: inline-block;
        height: 82px;
        width: 82px;
    }
    .wordmark{
        height: 82px;
        margin-inline-start: 16px;
        width: 134px;

        display: flex;
        align-items: center;
        justify-content: center;

        h1{
            color: white;
            font-size: 40px;
        }
    }
  }

  .search-bar{
        width: 720px;
        background: red;
        display: flex;
        align-items: center;
        justify-content: center;
        
        background: var(--bg-search);
        border: 1px solid transparent;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        cursor: text;

        label{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 18px;
            cursor: text;

        img{
            width: 25px;
        }
        }

    input{
        width: 100%;
        font-size: 15.5px;
        background: transparent;
        color: var(--color-string);
        border: none;
        outline: none;
        padding: 14px 0;
        ::placeholder{
            color: var(--color-string);
            font-size: 15px;
        }
    }
  }

  .search-bar:hover{
        border-color: #1dd9f6;
  }

  .saved-sites{
        width: 1200px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        flex-direction: row;
        flex-wrap: wrap;

    .card{
        position: relative;
        width: 120px;
        height: 143px;
        cursor: pointer;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

      .icone{
            width: 80px;
            height: 80px;
            border-radius: 8px;
            background: var(--bg-search);
            display: flex;
            align-items: center;
            justify-content: center;
        
        img{
            border-radius: 8px;
            width: 48px;
            height: 48px;
        }
      }

      .name-site{
            text-align: center;
            p{
                color: var(--color-string);
                text-align: center;
                text-transform: capitalize;
                font-size: 13.5px;
                letter-spacing: 1.3px;
            }
      }

      .config{
            position: absolute;
            z-index: 1;
            color: var(--color-string);
            font-size: 25px;

            top: -12px;
            right: 9px;
            visibility: hidden;
      }

    }

    .card:hover{
        background-color: var(--bg-card);
    }

    .card:hover .config{
        visibility: visible;
    }
  }

  @media (max-width: 721px){
    .search-bar{
        width: 100%;
    }
  }

  @media (max-width: 1202px){
    .saved-sites{
        width: 100%;
    }
  }
`

export const Atalhos = styled.div<AtalhosVisible>`
    visibility: ${({visible}) => visible === "visible" ? "visible" : "hidden"};
`