import React, { FC, useEffect } from 'react';
import { useParams } from "react-router";
import { NavLink, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { fetchCountryByBorder, fetchCountryByName } from '../features/country/countrySlice';
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { Spinner, StyledBadge, StyledCountryDetail } from "../components/styles/CountryDetail.styled"
import { InfoItem } from '../components/styles/Card.styled'

interface Props {
  userTheme: string
}

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}


const CountryDetail: FC<Props> = ({ userTheme }: Props) => {
  const params = useParams();

  const { country, isLoading } = useAppSelector((state) => state.country);
  const dispatch = useAppDispatch()

  let query = useQuery();


  useEffect(() => {
    if (!query.get("border")) {
      dispatch(fetchCountryByName(params.searchTerm!));
    } else {
      dispatch(fetchCountryByBorder(params.searchTerm!));
    }
  }, [params.searchTerm, query, dispatch]);

  let languages = "";

  if (country && country.languages) {
    Object.entries(country.languages).forEach(([key, value]) => {
      languages += `${value}, `
    })
  }

  let capital = "";

  if (country && country.capital) {
    if (country.capital.length > 0) {
      country.capital.map(c => {
        return capital += c + ', ';
      })      
    } else {
      capital = country.capital[0];
    }    
  }

  return (
    <StyledCountryDetail myTheme={userTheme}>
      <NavLink to="/">
        <div className="back-btn">
          <FaArrowLeft />
          <span>Back</span>
        </div>
      </NavLink>

      {country && !isLoading ? (
        <div className='country__details'>
          <img src={country.flags.png} alt="" />
          <div className='container'>
            <h1>{country.name.common}</h1>
            <div className='sections'>
              <div className='sectionOne'>
                <InfoItem myTheme={userTheme}>
                  <span>Native Name:</span>{country.name.common}
                </InfoItem>
                <InfoItem myTheme={userTheme}>
                  <span>Population:</span>{country.population.toLocaleString("en-us")}
                </InfoItem>
                <InfoItem myTheme={userTheme}>
                  <span>Region:</span>{country.region}
                </InfoItem>
                <InfoItem myTheme={userTheme}>
                  <span>Sub Region:</span>{country.subregion}
                </InfoItem>
                <InfoItem myTheme={userTheme}>
                  <span>Capital:</span>{capital.trim().replace(/.$/, ".")}
                </InfoItem>
              </div>
              <div className='sectionTwo'>
                <InfoItem myTheme={userTheme}>
                  <span>Top Level Domain:</span>{country.tld}
                </InfoItem>
                <InfoItem myTheme={userTheme}>
                  <span>Currencies:</span>{"USD"}
                </InfoItem>
                <InfoItem myTheme={userTheme}>
                  <span>Languages:</span>
                  {languages.trim().replace(/.$/, ".")}
                </InfoItem>

              </div>
            </div>
            <div>
              {country.borders && (
                <InfoItem myTheme={userTheme}>
                  <span>Border Countries:</span>
                  {country.borders.map((border: string, index: number) => (
                    <NavLink to={`/${border}?border=true`} key={index} style={{ marginBottom: "16px" }}><StyledBadge myTheme={userTheme}>{border}</StyledBadge></NavLink>
                  ))}
                </InfoItem>
              )}
            </div>
          </div>
        </div>
      )
        :
        <Spinner >
          <div className='loader'></div>
        </Spinner>
      }

    </StyledCountryDetail>
  )

}

export default CountryDetail