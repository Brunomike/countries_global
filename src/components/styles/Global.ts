import { createGlobalStyle } from "styled-components";
import defaultTheme from "./theme";

const GlobalStyles = createGlobalStyle<{ myTheme: string }>`
*{
    box-sizing: border-box;    
}

body{
    background-color: ${({ myTheme}) => myTheme === "dark" ? defaultTheme.colors.dark.body : defaultTheme.colors.light.body};
    color: hsl(192,100%,9%);
    font-family: 'Poppins',sans-serif;
    font-size: 1.15em;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

img{
    max-width: 100%;
}

.skeleton-card{

}

.skeleton{
    opacity: .7;
    animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-text{
    width: 100%;
    height: .5rem;
    margin-bottom: .25rem;
    border-radius: .125rem;
}
.skeleton:last-child{
    margin-bottom: 0;
    width: 80%;
}

@keyframes skeleton-loading{
    0%{
        background-color: hsl(200, 20%, 70%);
    }
    100%{
        background-color: hsl(200, 20%, 95%);
    }
}
`
//     
export default GlobalStyles;