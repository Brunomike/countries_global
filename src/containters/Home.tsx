import React, { useState, useEffect, useCallback, FC } from "react";

import { RootObject } from '../interfaces/Country';
import { fetchCountries } from '../features/default/defaultSlice';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Card from "../components/Card";
import CardSkeleton from "../components/CardSkeleton";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";

interface Props {
    userTheme: string
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Home: FC<Props> = ({ userTheme }: Props) => {
    const [isFilterLoading, setIsFilterLoading] = useState(false);
    // const [countries, setCountries] = useState([]);
    let selectedFilter = localStorage.getItem('filter') || 'all';

    const [filter, setFilter] = useState(selectedFilter);

    const [filteredCountries, setFilteredCountries] = useState<RootObject[]>([])
    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useAppDispatch();
    const { countries, isLoading, isSuccess } = useAppSelector((state) => state.countries);

    const filterResults = useCallback((filterValue: string, country: boolean) => {
        if (!country) {
            if (filterValue === "all") {
                setFilteredCountries(countries);
            } else {
                const allCountries = [...countries];
                const filteredCountries = allCountries.filter((country: RootObject) => country.region.toLowerCase() === filterValue);

                setFilteredCountries(filteredCountries);
            }
        } else {
            const allCountries = [...countries];
            const filteredCountries = allCountries.filter((country: RootObject) => country.name.common.toLowerCase().includes(filterValue))
            setFilteredCountries(filteredCountries);
        }
    }, [countries]);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    useEffect(() => {
        if (isSuccess) {
            filterResults(filter, false);
        }
    }, [filterResults, filter, isSuccess]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        filterResults(e.target.value, true);
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsFilterLoading(true);
        filterResults(e.target.value, false);
        setFilter(e.target.value);
        localStorage.setItem('filter', e.target.value);
        setIsFilterLoading(false);
    }

    if (isLoading || isFilterLoading) {
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
    if (filteredCountries.length === 0) {
        <p style={{ color: userTheme === "dark" ? "white" : "black" }}>No countries found!</p>
    }

    return (
        <>
            <div className='search'>
                <Search value={searchTerm} name={"searchTerm"} handleChange={handleChange} theme={userTheme} />
                <Dropdown theme={userTheme} filter={filter} handleChange={handleFilterChange} />
            </div>
            <div className="countries">
                {filteredCountries.length > 0 && !isLoading && !isFilterLoading &&
                    filteredCountries.map((country, index) => (
                        <Card key={index} theme={userTheme} country={country} />
                    ))
                }

            </div>
        </>
    )
}

export default Home;