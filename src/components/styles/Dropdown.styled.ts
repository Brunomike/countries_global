import styled from 'styled-components';

export const StyledDropdown = styled.div<{ myTheme: string }>`    
    background-color: inherit;
    background-color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.header : theme.colors.light.header};
    border-radius: 4px;
    padding: 0 4px 0 0;
    box-shadow: 4px 2px 13px 2px rgb(0 0 0 / 10%);

    select{
        outline:none;        
        border:none;
        background-color: inherit;
        padding: 8px 16px;
        border-radius: 4px;
        color: ${({ myTheme, theme }) => myTheme === "dark" ? theme.colors.dark.textColor : theme.colors.light.textColor};

        option{
            outline:none;        
            border:none;
            padding: 8px 16px;
        }
    }
`