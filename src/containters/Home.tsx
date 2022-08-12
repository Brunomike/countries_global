import { useState, useEffect, FC } from "react";
import axios from "axios";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import { Country, RootObject } from '../interfaces/Country';

interface Props {
    searchTerm: string,
    handleChange: (e: any) => void,
    userTheme: string
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];


const Home: FC<Props> = ({ searchTerm, handleChange, userTheme }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState("all");
    const [filteredCountries, setFilteredCountries] = useState([])


    useEffect(() => {
        fetchCountries();
    }, [])

    //Check if internet connection is available

    function fetchCountries() {
        setIsLoading(true);
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => res.data)
            .then(data => {
                const formattedCountryList = data.map((country: any, index: number) => {
                    return {
                        name: country.name.common,
                        population: country.population,
                        region: country.region,
                        capital: country.capital,
                        imageUrl: country.flags.png
                    }
                });
                setCountries(formattedCountryList);
                setFilteredCountries(formattedCountryList);
            })
            .catch((err) => {
                console.log(err);
            })
        setIsLoading(false);
    }

    function handleFilterChange(e: any) {
        if (e.target.value === "all") {
            setFilteredCountries(countries);
        } else {
            const allCountries = [...countries];
            const filteredCountries = allCountries.filter((country:RootObject) => country.region === e.target.value)
        }
    }

    if (isLoading) {
        return (
            <>
                <div className='search'>
                    <Search value={searchTerm} name={"searchTerm"} handleChange={handleChange} theme={userTheme} />
                    <Dropdown theme={userTheme} filter={filter} handleChange={handleFilterChange} />
                </div>
                <div className="countries">
                    {
                        myArray.map((item, index) => (
                            <CardSkeleton key={index} userTheme={userTheme} />
                        ))}
                </div>
            </>
        )
    }

    return (
        <>
            <div className='search'>
                <Search value={searchTerm} name={"searchTerm"} handleChange={handleChange} theme={userTheme} />
                <Dropdown theme={userTheme} filter={filter} handleChange={handleFilterChange} />
            </div>
            <div className="countries">
                {countries.length > 0 && !isLoading &&
                    countries.map((country, index) => (
                        <Card key={index} theme={userTheme} country={country} />
                    ))
                }

            </div>
        </>
    )
}

export default Home