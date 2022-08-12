import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon } from 'react-icons/fa';
import { StyledHeader } from "./styles/Header.styled";

interface Props {
    currentTheme: string,
    toggleTheme: () => void
}

const Header: FC<Props> = ({ currentTheme, toggleTheme }: Props) => {
    let mode = currentTheme === "dark" ? "Dark Mode" : "Light Mode";

    return (
        <StyledHeader myTheme={currentTheme}>
            <NavLink to={"/"}><h1>Where in the world?</h1></NavLink>
            <div onClick={toggleTheme}>
                <FaMoon />
                <p>{mode}</p>
            </div>
        </StyledHeader>
    )
}

export default Header
