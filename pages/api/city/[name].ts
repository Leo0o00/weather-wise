import CityData from "@/interfaces/city";
import cities from "@/lib/city.list.json";
import {NextApiRequest, NextApiResponse} from "next";

const Cities = cities as CityData[];
const NUM_SUGGESTIONS = 5;

function searchCities(value: string): CityData[] {
    return Cities.filter(city => city.name.toLowerCase().startsWith(value.toLowerCase())).slice(0, NUM_SUGGESTIONS);
}

export default function handler({query: {name}}: NextApiRequest, res: NextApiResponse) {
    const cityName = Array.isArray(name) ? name.join("") : name;

    //Filtra la lista de ciudades por aquellas que su nombre coincida con el parametro name
    const filteredCities = cityName ? searchCities(cityName) : [];

    return res.json({
        cities: filteredCities
    })
}