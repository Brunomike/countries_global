import axios from "axios";
import { baseUrl } from "../../constants";


const getCountries = async () => {
    const response = await axios.get(`${baseUrl}/all`);
    return response.data;
}

const defaultService = {
    getCountries,
}

export default defaultService;