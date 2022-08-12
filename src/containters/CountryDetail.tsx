import { useState, useEffect, FC } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import { RootObject } from '../interfaces/Country';

import { StyledCountryDetail, StyledBadge } from "../components/styles/CountryDetail.styled"
import { InfoItem } from '../components/styles/Card.styled'

interface Props {
  userTheme: string
}


const CountryDetail: FC<Props> = ({ userTheme }: Props) => {
  const params = useParams();
  const [country, setCountry] = useState<RootObject>();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://restcountries.com/v3.1/name/${params.searchTerm}`)
      .then(res => res.data[0])
      .then(data => {
        console.log({ remote: data });
        setCountry(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      })
    console.log({ country: country });
  }, []);


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
          <img src="https://flagcdn.com/w320/kw.png" alt="" />
          <div className='container'>
            <h1>{country.name.common}</h1>
            <div className='sections'>
              <div className='sectionOne'>
                <InfoItem myTheme={userTheme}>
                  <span>Native Name:</span>Belgie
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
                  {/* {country.languages[0]} */}
                </InfoItem>
              </div>
            </div>
            <div>
              <InfoItem myTheme={userTheme}>
                <span>Border Countries:</span>
                {country.borders.map((border: string, index: number) => (
                  <StyledBadge myTheme={userTheme}>{border}</StyledBadge>
                ))}
                <StyledBadge myTheme={userTheme}>France</StyledBadge>
                <StyledBadge myTheme={userTheme}>Germany</StyledBadge>
                <StyledBadge myTheme={userTheme}>Netherlands</StyledBadge>
              </InfoItem>
            </div>
          </div>
        </div>
      )
        :
        <p>Loading...</p>
      }

    </StyledCountryDetail>
  )

}

export default CountryDetail