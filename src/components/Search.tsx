import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

import {StyledSearch} from './styles/Search.styled'

interface Props {
    value: string,
    name: string,
    handleChange: (e:any) => void,
    theme:string
}

const Search: FC<Props> = ({ value, name, handleChange ,theme}: Props) => {
    return (
        <StyledSearch myTheme={theme}>
            <FaSearch />
            <input value={value} name={name} onChange={(e)=>handleChange(e)} placeholder="Search for a country..." />
        </StyledSearch>
    )
}

export default Search;
