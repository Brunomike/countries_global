import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { NavLink,Navigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { RootObject } from '../interfaces/Country';

import { StyledCountryDetail, StyledBadge, Spinner } from "../components/styles/CountryDetail.styled"
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
  const [country, setCountry] = useState<RootObject>();
  const [isLoading, setIsLoading] = useState(false)

  let query = useQuery();

  useEffect(() => {
    setIsLoading(true);
    if (!query.get("border")) {
      axios.get(`https://restcountries.com/v3.1/name/${params.searchTerm}`)
        .then(res => res.data[0])
        .then(data => {
          setCountry(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        })
    } else {      
      axios.get(`https://restcountries.com/v3.1/alpha/${params.searchTerm}`)
        .then(res => res.data[0])
        .then(data => {          
          setCountry(data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        })
    }
  }, [params.searchTerm]);

  let languages = ""

  if (country) {
    Object.entries(country.languages).forEach(([key, value]) => {
      languages += `${value}, `
    })
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
                  <span>Capital:</span>{country.capital}
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
                    <NavLink to={`/${border}?border=true`} key={index} style={{marginBottom:"16px"}}><StyledBadge myTheme={userTheme}>{border}</StyledBadge></NavLink>
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