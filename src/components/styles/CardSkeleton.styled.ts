import styled from 'styled-components';

export const StyledSkeletonCard = styled.div<{ myTheme: string }>`   
    width: 270px;
    height: 292px;
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
    .country__image{
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
            height:1rem;
            margin: 16px 0 ;
            p{
                font-size: 16px;
                font-weight: 800;                
                color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};    
            }
        }       
     
    }
`