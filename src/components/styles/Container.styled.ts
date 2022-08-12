import styled from 'styled-components';

export const Container=styled.div`
    width: 100%;
    height: 100%;
    padding: 32px;
    background-color: inherit;
    display: flex;
    flex-direction: column;
    gap: 32px;

    
    div.search{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        

        @media(max-width:${({theme})=>theme.mobile}){
            flex-direction: column;
            gap: 16px;

            div:first-of-type{
                width: 100%;
            }
        }
       
    }

    div.countries{        
        display: flex;        
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 32px;

        @media(max-width:${({theme})=>theme.mobile}){
            flex-direction: column;
        }
    }
`