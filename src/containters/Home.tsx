import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import {  RootObject } from '../interfaces/Country';


interface Props {
    userTheme: string
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];


const Home: FC<Props> = ({ userTheme }: Props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState("all");
    const [filteredCountries, setFilteredCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchCountries();
    }, []);


    function handleChange(e: any) {
        setSearchTerm(e.target.value);
        filterResults(e.target.value, true);
    }

    function fetchCountries() {
        setIsLoading(true);
        axios.get("https://restcountries.com/v3.1/all")
            .then(res => res.data)
            .then(data => {
                setCountries(data);

                filter !== "all" ? filterResults(filter, false) : setFilteredCountries(data);

                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
        filterResults(e.target.value);
        setFilter(e.target.value);
    }

    function filterResults(filterValue: string, country?: boolean) {
        if (!country) {
            if (filterValue === "all") {
                setIsLoading(true);
                setFilteredCountries(countries);
                setIsLoading(false);
            } else {
                setIsLoading(true);
                const allCountries = [...countries];
                const filteredCountries = allCountries.filter((country: RootObject) => country.region.toLowerCase() === filterValue);

                setFilteredCountries(filteredCountries);
                setIsLoading(false);
            }
        } else {
            setIsLoading(true);
            const allCountries = [...countries];
            const filteredCountries = allCountries.filter((country: RootObject) => country.name.common.toLowerCase().includes(filterValue))

            setFilteredCountries(filteredCountries);
            setIsLoading(false);
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
                {filteredCountries.length > 0 && !isLoading &&
                    filteredCountries.map((country, index) => (
                        <Card key={index} theme={userTheme} country={country} />
                    ))
                }

            </div>
        </>
    )
}

export default Home