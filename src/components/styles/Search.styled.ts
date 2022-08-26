import styled from 'styled-components';

export const StyledSearch=styled.div<{myTheme:string}>`
    width:34%;
    border-radius: 4px;
    background-color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.header : theme.colors.light.header};
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 4px 2px 13px 2px rgb(0 0 0 / 10%);

    input{
        outline: none;
        border: none;
        background: transparent;
        color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};
        flex-grow:1;
    }

    svg{
        color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};
    }

    @media(max-width:${({theme})=>theme.mobile}){
     width: 100%;
    }
`;