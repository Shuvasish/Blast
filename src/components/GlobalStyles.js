import { createGlobalStyle } from "styled-components";

// font-family: 'Abril Fatface', cursive;
// font-family: 'Montserrat', sans-serif;

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color:#ff7676 transparent;
    }
    html{
        &::-webkit-scrollbar{
            width:.5rem;
        }
        &::-webkit-scrollbar-track {
             background: transparent;
            }
        &::-webkit-scrollbar-thumb{
            background-color:#ff7676;
        }
        

    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size:3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color:#ff7676;
    }
    h3{
        font-size:1.3rem;
        color:#333;
        padding: 1.5rem 0rem; 
    }
    p{
        font-size:1.2rem;
        line-height:200%;
        color:#696969;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    img{
        display:block;
    }
    input{
        font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }
    button{
    font-family: "Montserrat", sans-serif;

    }
`;

export default GlobalStyles;
