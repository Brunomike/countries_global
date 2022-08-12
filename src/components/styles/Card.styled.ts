import styled from 'styled-components';

export const StyledCard = styled.div<{ myTheme: string }>`   
    text-decoration:none;
    max-width: 270px;
    min-width: 270px;
    background-color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.element : theme.colors.light.element};
    border-radius: 4px;    
    display: flex;
    flex-direction: column;
    box-shadow: 4px 2px 13px 2px rgb(0 0 0 / 10%);

    &:hover{
        cursor: pointer;
    }

    @media(max-width:${({theme})=>theme.mobile}){
        width: 100%;
    }
   
    //Country Image
    img{
        width: 100%;
        height: 150px;
        border-top-right-radius:4px;
        border-top-left-radius:4px;        
    }

    //Country Info
    div.country__info{
        width:100%;
        height: 100%;
        padding: 8px 16px;
                
        .country__name{
            p{
                font-size: 16px;
                font-weight: 800;                
                color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};    
            }
        }       
     
    }
`

export const CountryInfos=styled.div`

`

export const InfoItem = styled.div<{myTheme:string}>`    
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;    
    color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};    
    padding: 4px 0;

    span:first-of-type{
        font-weight:600;
        margin-right:4px;
    }    
`