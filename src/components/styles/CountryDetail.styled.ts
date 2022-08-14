import styled from 'styled-components';

export const StyledCountryDetail = styled.div<{ myTheme: string }>`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 36px;


    a{
        text-decoration: none;
        
        .back-btn{            
            background-color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.header : theme.colors.light.header};
            color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};
            width: 120px;
            display: flex;
            justify-content: center;
            gap:8px;
            align-items:center;
            padding: 4px 16px;
            border-radius: 4px;
            box-shadow: 4px 2px 13px 2px rgb(0 0 0 / 10%);
    
           &:hover{
                cursor:pointer;
           }
        }
    }

    .country__details{   
        width: 100%;   
        height: 100%;  
        display: flex;        
        justify-content: space-between;
        align-items:left;   
        gap: 32px;     


        @media(max-width:${({ theme }) => theme.mobile}){
            flex-direction: column;
        }

        @media(max-width:980px){
            flex-direction: column;
        }

        img{            
            width: 70%;
            height: 50%;

            @media(max-width:${({ theme }) => theme.mobile}){
                width: 100%;
            }
        }

        .container{
            width: 100%;
            display: flex;
            flex-direction:column;
            justify-content: space-between;
            align-items: baseline;

            h1{
                font-size: 16px;
                color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};    
            }
            
            .sections{    
                width: 70%;            
                display: flex;                
                justify-content: space-between;
                align-items:baseline; 


                @media(max-width:${({ theme }) => theme.mobile}){
                    flex-direction: column;
                    gap: 16px;
                }
                @media(max-width:980px){
                    flex-direction: column;
                    gap: 16px;
                }
                                        
            }

            @media(max-width:${({ theme }) => theme.mobile}){
                flex-direction: column;
                gap: 16px;
            }
            @media(max-width:980px){
                flex-direction: column;
                gap: 16px;
            }
        }
    }
`

export const StyledBadge = styled.span<{ myTheme: string }>`
padding: 4px 8px;
color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};
background-color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.header : theme.colors.light.header};
box-shadow: 4px 2px 13px 2px rgb(0 0 0 / 10%);   
margin-right: 4px;
margin-bottom: 4px;
`

export const Spinner = styled.div`
    width: 100%;
    margin: 0 auto;

    .loader,
    .loader:after {
        border-radius: 50%;
        width: 10em;
        height: 10em;
    }

    .loader {
        margin: 60px auto;
        font-size: 10px;
        position: relative;
        text-indent: -9999em;
        border-top: 1.1em solid rgba(58,80,100, 0.2);
        border-right: 1.1em solid rgba(58,80,100, 0.2);
        border-bottom: 1.1em solid rgba(58,80,100, 0.2);
        border-left: 1.1em solid #3a5064;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation: load8 1.1s infinite linear;
        animation: load8 1.1s infinite linear;
    }

   @keyframes load8 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    `;