import styled from 'styled-components';

export const StyledHeader = styled.header<{ myTheme: string }>`
    width: 100%;
    padding: 8px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.1);
    background-color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.header : theme.colors.light.header};

    a{
        text-decoration: none;
        h1{
            font-size: 16px;
            color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};
        }
    }
    

    div{
        display: flex;
        justify-content space-between;
        align-items: center;
        gap: 8px;        

        &:hover{
            cursor: pointer;
        }
        svg{
            color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};
        }

        p{
            font-size: 16px;
            color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};
        }     
    }
`