import { FC } from "react"
import { StyledDropdown } from "./styles/Dropdown.styled"

interface Props {
    theme: string
    filter: string
    handleChange: (e:any) => void
}

const Dropdown: FC<Props> = ({ theme, filter,handleChange }: Props) => {
    return (
        <StyledDropdown myTheme={theme}>
            <select value={filter} onChange={handleChange}>
                <option value={"all"}>Filter by Region</option>
                <option value={"africa"}>Africa</option>
                <option value={"americas"}>Americas</option>
                <option value={"asia"}>Asia</option>
                <option value={"europe"}>Europe</option>
                <option value={"oceania"}>Oceania</option>
            </select>
        </StyledDropdown>
    )
}

export default Dropdown
