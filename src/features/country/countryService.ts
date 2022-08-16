import axios from "axios";
import { baseUrl } from "../../constants";


const getCountryByName = async (searchTerm: string) => {
    const response = await axios.get(`${baseUrl}/name/${searchTerm}`);

    return response.data[0];
}

const getCountryByBorder = async (searchTerm: string) => {
    const response = await axios.get(`${baseUrl}/alpha/${searchTerm}`);

    return response.data[0];
}

const countryService = {
    getCountryByName,
    getCountryByBorder
};

export default countryService;