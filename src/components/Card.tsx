import { FC } from "react";
import { Link } from "react-router-dom";
import { StyledCard, InfoItem } from "./styles/Card.styled";

import {RootObject} from '../interfaces/Country'


interface Props {
  theme: string
  country: RootObject
}

const Card: FC<Props> = ({ theme, country }: Props) => {
  
  return (
  <Link to={`${country.name.common.toLowerCase()}`} style={{textDecoration:"none"}}>
    <StyledCard myTheme={theme} className="country">
      <img src={country.flags.png} alt="Country" className="country__image"/>

      <div className="country__info">
        <div className="country__name">
          <p>{country.name.common}</p>
        </div>
        <div>
        <InfoItem myTheme={theme}>
            <span>Population:</span>            
            {country.population.toLocaleString("en-us")}
          </InfoItem>
          <InfoItem myTheme={theme}>
            <span>Region:</span>
            {country.region}
          </InfoItem>
          <InfoItem myTheme={theme}>
            <span>Capital:</span>
            <span>{country.capital}</span>
          </InfoItem>
        </div>
      </div>
    </StyledCard>
  </Link>
  )
}


export default Card


