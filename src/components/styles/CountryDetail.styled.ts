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
                }
                @media(max-width:980px){
                    flex-direction: column;
                }
                                        
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